// ============================================
// Pragya — Adaptive Assessment Engine
// Deterministic, interpretable adaptive logic
// ASER-aligned: finds highest comfortable level
// ============================================

import { Subject, SkillLevel, MasteryStatus, SubSkillProfile, AssessmentResponse, Evidence, Question } from './types';
import { getQuestionsBySkill, getHighValueQuestions } from './questions';
import { getSkillPath, findBottleneck, getPrerequisites } from './learning-graph';

// --- Configuration ---

const CONFIDENCE_THRESHOLD = 80; // Minimum confidence to accept a classification
const MIN_QUESTIONS_PER_SKILL = 2; // Minimum questions before classifying
const MAX_QUESTIONS_PER_SKILL = 4; // Maximum questions per skill
const MASTERY_THRESHOLD = 0.75; // 75% correct = mastered
const MAX_TOTAL_QUESTIONS = 20; // Stop the diagnostic after this many

// --- Types ---

interface SkillEstimate {
  skillId: string;
  correct: number;
  total: number;
  confidence: number;
  status: MasteryStatus;
  responses: AssessmentResponse[];
}

export interface AdaptiveState {
  subject: Subject;
  currentSkillIndex: number;
  skillEstimates: Record<string, SkillEstimate>;
  questionsAsked: number;
  isComplete: boolean;
  investigatorLog: InvestigatorEntry[];
  currentQuestion: Question | null;
  usedQuestionIds: string[];
}

export interface InvestigatorEntry {
  type: 'hypothesis' | 'probe' | 'evidence' | 'classification' | 'bottleneck';
  skillId: string;
  message: string;
  timestamp: string;
}

// --- Engine Functions ---

/**
 * Initialize a new adaptive assessment session.
 */
export function initAdaptiveSession(subject: Subject, startAtGradeLevel?: number): AdaptiveState {
  const skillPath = getSkillPath(subject);
  const skillEstimates: Record<string, SkillEstimate> = {};

  for (const node of skillPath) {
    skillEstimates[node.id] = {
      skillId: node.id,
      correct: 0,
      total: 0,
      confidence: 0,
      status: 'not-assessed',
      responses: [],
    };
  }

  // ASER approach: start at expected grade level and adapt
  // For a Class 5 student, start at paragraph level (Std I text)
  let startIndex = 0;
  if (startAtGradeLevel && startAtGradeLevel >= 3) {
    startIndex = Math.min(2, skillPath.length - 1); // Start at paragraph/subtraction level
  } else if (startAtGradeLevel && startAtGradeLevel >= 2) {
    startIndex = Math.min(1, skillPath.length - 1); // Start at word/number-11-99 level
  }

  return {
    subject,
    currentSkillIndex: startIndex,
    skillEstimates,
    questionsAsked: 0,
    isComplete: false,
    investigatorLog: [],
    currentQuestion: null,
    usedQuestionIds: [],
  };
}

/**
 * Get the next question for the adaptive assessment.
 * Returns null if the assessment is complete.
 */
export function getNextQuestion(state: AdaptiveState): Question | null {
  if (state.isComplete || state.questionsAsked >= MAX_TOTAL_QUESTIONS) {
    state.isComplete = true;
    return null;
  }

  const skillPath = getSkillPath(state.subject);
  const currentSkill = skillPath[state.currentSkillIndex];

  if (!currentSkill) {
    state.isComplete = true;
    return null;
  }

  const estimate = state.skillEstimates[currentSkill.id];

  // Check if we have enough data for this skill
  if (estimate.total >= MAX_QUESTIONS_PER_SKILL) {
    // Classify and move on
    classifySkill(state, currentSkill.id);
    return advanceAndGetNext(state);
  }

  // Check if confidence is high enough to stop early
  if (estimate.total >= MIN_QUESTIONS_PER_SKILL && estimate.confidence >= CONFIDENCE_THRESHOLD) {
    classifySkill(state, currentSkill.id);
    return advanceAndGetNext(state);
  }

  // Select a question
  const availableQuestions = getHighValueQuestions(currentSkill.id)
    .filter(q => !state.usedQuestionIds.includes(q.id));

  if (availableQuestions.length === 0) {
    // No more questions for this skill
    classifySkill(state, currentSkill.id);
    return advanceAndGetNext(state);
  }

  // If confidence is low, pick the highest diagnostic value question
  const question = estimate.confidence < CONFIDENCE_THRESHOLD
    ? availableQuestions[0] // Highest diagnostic value
    : availableQuestions[Math.floor(Math.random() * Math.min(2, availableQuestions.length))];

  state.currentQuestion = question;

  // Log investigator entry
  if (estimate.total === 0) {
    state.investigatorLog.push({
      type: 'hypothesis',
      skillId: currentSkill.id,
      message: `Assessing ${currentSkill.name}...`,
      timestamp: new Date().toISOString(),
    });
  } else if (estimate.confidence < CONFIDENCE_THRESHOLD) {
    state.investigatorLog.push({
      type: 'probe',
      skillId: currentSkill.id,
      message: `Confidence is ${Math.round(estimate.confidence)}%. Sending a diagnostic probe...`,
      timestamp: new Date().toISOString(),
    });
  }

  return question;
}

/**
 * Process a student's response and update the adaptive state.
 */
export function processResponse(
  state: AdaptiveState,
  questionId: string,
  selectedAnswer: string,
  timeSpent: number
): { correct: boolean; investigatorMessage: string } {
  const question = state.currentQuestion;
  if (!question || question.id !== questionId) {
    return { correct: false, investigatorMessage: '' };
  }

  const correct = selectedAnswer === question.correctAnswer;
  const estimate = state.skillEstimates[question.skill];

  // Record response
  const response: AssessmentResponse = {
    questionId,
    question,
    selectedAnswer,
    correct,
    timeSpent,
    timestamp: new Date().toISOString(),
  };

  estimate.responses.push(response);
  estimate.total += 1;
  if (correct) estimate.correct += 1;

  state.usedQuestionIds.push(questionId);
  state.questionsAsked += 1;

  // Update confidence
  estimate.confidence = calculateConfidence(estimate);

  // Update status
  const accuracy = estimate.correct / estimate.total;
  if (accuracy >= MASTERY_THRESHOLD) {
    estimate.status = 'secure';
  } else if (accuracy >= 0.5) {
    estimate.status = 'developing';
  } else {
    estimate.status = 'needs-support';
  }

  // Generate investigator message
  let investigatorMessage = '';
  if (correct) {
    state.investigatorLog.push({
      type: 'evidence',
      skillId: question.skill,
      message: `✓ Correct response for ${question.skill}`,
      timestamp: new Date().toISOString(),
    });
    investigatorMessage = `Learning signal detected: ${question.skill} ✓`;
  } else {
    state.investigatorLog.push({
      type: 'evidence',
      skillId: question.skill,
      message: `✗ Incorrect response for ${question.skill}. Investigating further...`,
      timestamp: new Date().toISOString(),
    });
    investigatorMessage = `Checking this skill more carefully...`;

    // Check for prerequisite bottleneck
    const masteredSkills = Object.entries(state.skillEstimates)
      .filter(([, e]) => e.status === 'secure')
      .map(([id]) => id);

    const bottleneck = findBottleneck(question.skill, masteredSkills, state.subject);
    if (bottleneck && state.skillEstimates[bottleneck].status !== 'secure') {
      state.investigatorLog.push({
        type: 'bottleneck',
        skillId: bottleneck,
        message: `Possible prerequisite gap detected: ${bottleneck}. Investigating...`,
        timestamp: new Date().toISOString(),
      });
      investigatorMessage = `Investigating a possible building-block gap...`;
    }
  }

  return { correct, investigatorMessage };
}

/**
 * Classify a skill based on collected evidence.
 */
function classifySkill(state: AdaptiveState, skillId: string): void {
  const estimate = state.skillEstimates[skillId];
  if (estimate.total === 0) {
    estimate.status = 'not-assessed';
    estimate.confidence = 0;
    return;
  }

  const accuracy = estimate.correct / estimate.total;

  if (accuracy >= MASTERY_THRESHOLD) {
    estimate.status = 'secure';
  } else if (accuracy >= 0.5) {
    estimate.status = 'developing';
  } else {
    estimate.status = 'needs-support';
  }

  estimate.confidence = calculateConfidence(estimate);

  state.investigatorLog.push({
    type: 'classification',
    skillId,
    message: `${skillId}: ${estimate.status} (${Math.round(estimate.confidence)}% confidence, ${estimate.correct}/${estimate.total} correct)`,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Advance to the next skill and get the next question.
 * Implements ASER-style adaptation: if current skill is failed, check prerequisites.
 * If current skill is passed, try the next higher skill.
 */
function advanceAndGetNext(state: AdaptiveState): Question | null {
  const skillPath = getSkillPath(state.subject);
  const currentSkill = skillPath[state.currentSkillIndex];
  const estimate = state.skillEstimates[currentSkill.id];

  if (estimate.status === 'secure' || estimate.status === 'developing') {
    // Move to next higher skill
    state.currentSkillIndex += 1;
    if (state.currentSkillIndex >= skillPath.length) {
      state.isComplete = true;
      return null;
    }
  } else if (estimate.status === 'needs-support') {
    // ASER approach: move DOWN to check prerequisites
    if (state.currentSkillIndex > 0) {
      // Check if the prerequisite was already assessed
      const prevSkill = skillPath[state.currentSkillIndex - 1];
      if (state.skillEstimates[prevSkill.id].total === 0) {
        state.currentSkillIndex -= 1;
      } else {
        // Already assessed prerequisite — we're done exploring downward
        // Try to go up to find any remaining unassessed skills
        const nextUnassessed = skillPath.findIndex(
          (node, idx) => idx > state.currentSkillIndex && state.skillEstimates[node.id].total === 0
        );
        if (nextUnassessed >= 0) {
          state.currentSkillIndex = nextUnassessed;
        } else {
          state.isComplete = true;
          return null;
        }
      }
    } else {
      // Already at the lowest level — move to next unassessed skill
      const nextUnassessed = skillPath.findIndex(
        (node, idx) => idx > state.currentSkillIndex && state.skillEstimates[node.id].total === 0
      );
      if (nextUnassessed >= 0) {
        state.currentSkillIndex = nextUnassessed;
      } else {
        state.isComplete = true;
        return null;
      }
    }
  }

  return getNextQuestion(state);
}

/**
 * Calculate confidence based on number of responses and consistency.
 */
function calculateConfidence(estimate: SkillEstimate): number {
  if (estimate.total === 0) return 0;

  // Base confidence from sample size (more questions = more confident)
  const sampleFactor = Math.min(estimate.total / MAX_QUESTIONS_PER_SKILL, 1);

  // Consistency factor (all correct or all wrong = high confidence)
  const accuracy = estimate.correct / estimate.total;
  const consistencyFactor = Math.abs(accuracy - 0.5) * 2; // 0 at 50%, 1 at 0% or 100%

  // Combined confidence
  const rawConfidence = (sampleFactor * 0.6 + consistencyFactor * 0.4) * 100;

  return Math.min(Math.round(rawConfidence), 99);
}

/**
 * Get the final skill profile from the adaptive state.
 */
export function getFinalProfile(state: AdaptiveState): SubSkillProfile[] {
  const skillPath = getSkillPath(state.subject);

  return skillPath.map((node) => {
    const estimate = state.skillEstimates[node.id];
    const evidence: Evidence[] = estimate.responses.map((r) => ({
      questionId: r.questionId,
      question: r.question.questionText,
      response: r.selectedAnswer,
      correct: r.correct,
      timestamp: r.timestamp,
      skill: node.id,
      difficulty: r.question.difficulty,
    }));

    // Determine expected level based on grade 5
    const expectedLevel: SkillLevel = node.level;

    return {
      skillId: node.id,
      skillName: node.name,
      subject: state.subject,
      level: node.level,
      status: estimate.status,
      confidence: estimate.confidence,
      expectedLevel,
      evidence,
      nextAction: getNextAction(estimate.status, node.name),
    };
  });
}

/**
 * Get a plain-language next action for a skill status.
 */
function getNextAction(status: MasteryStatus, skillName: string): string {
  switch (status) {
    case 'secure':
      return `Great work! ${skillName} is strong. Ready to move to the next concept.`;
    case 'developing':
      return `${skillName} is growing. A little more practice with guided activities will help.`;
    case 'needs-support':
      return `${skillName} needs focused attention. Start with guided practice using simple examples.`;
    case 'not-assessed':
      return `${skillName} has not been assessed yet. Take the diagnostic to find out.`;
  }
}

/**
 * Generate a WHY explanation for a skill classification.
 */
export function generateWhyExplanation(
  skillId: string,
  state: AdaptiveState
): {
  evidence: string[];
  interpretation: string;
  confidence: number;
  nextAction: string;
} {
  const estimate = state.skillEstimates[skillId];
  const skillPath = getSkillPath(state.subject);
  const node = skillPath.find((n) => n.id === skillId);
  const skillName = node?.name || skillId;

  const evidenceList = estimate.responses.map(
    (r) => `${r.correct ? '✓' : '✗'} ${r.question.questionText} → answered "${r.selectedAnswer}"`
  );

  let interpretation = '';
  switch (estimate.status) {
    case 'secure':
      interpretation = `The learner shows strong ${skillName} ability. They answered ${estimate.correct} out of ${estimate.total} questions correctly with confidence.`;
      break;
    case 'developing':
      interpretation = `The learner shows some understanding of ${skillName} but is not yet consistent. They got ${estimate.correct} out of ${estimate.total} correct. More practice would help build confidence.`;
      break;
    case 'needs-support':
      interpretation = `The learner currently finds ${skillName} challenging. They answered ${estimate.correct} out of ${estimate.total} correctly. This skill needs focused attention and guided practice.`;
      break;
    case 'not-assessed':
      interpretation = `This skill has not been assessed yet.`;
      break;
  }

  return {
    evidence: evidenceList,
    interpretation,
    confidence: estimate.confidence,
    nextAction: getNextAction(estimate.status, skillName),
  };
}
