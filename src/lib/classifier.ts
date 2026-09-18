// ============================================
// Pragya — Skill Classifier & Learning DNA Engine
// Pure deterministic classification & explanation logic
// ============================================

import { Subject, SkillLevel, MasteryStatus, SubSkillProfile, Evidence } from './types';
import { getSkillPath } from './learning-graph';

export interface ClassificationResult {
  status: MasteryStatus;
  confidence: number;
  accuracy: number;
  label: string;
  colorClass: string;
  badgeBg: string;
}

/**
 * Classify mastery status based on accuracy score and sample size.
 */
export function classifySkillStatus(correctCount: number, totalQuestions: number): ClassificationResult {
  if (totalQuestions === 0) {
    return {
      status: 'not-assessed',
      confidence: 0,
      accuracy: 0,
      label: 'Not Assessed',
      colorClass: 'text-gray-400',
      badgeBg: 'bg-gray-100 text-gray-700 border-gray-200',
    };
  }

  const accuracy = correctCount / totalQuestions;
  let status: MasteryStatus = 'needs-support';

  if (accuracy >= 0.75) {
    status = 'secure';
  } else if (accuracy >= 0.5) {
    status = 'developing';
  }

  // Calculate confidence based on questions count and consistency
  const sampleFactor = Math.min(totalQuestions / 4, 1);
  const consistencyFactor = Math.abs(accuracy - 0.5) * 2;
  const confidence = Math.min(Math.round((sampleFactor * 0.6 + consistencyFactor * 0.4) * 100), 99);

  return {
    status,
    confidence,
    accuracy,
    label: getStatusLabel(status),
    colorClass: getStatusColor(status),
    badgeBg: getStatusBadgeBg(status),
  };
}

export function getStatusLabel(status: MasteryStatus): string {
  switch (status) {
    case 'secure':
      return 'Secure Mastery';
    case 'developing':
      return 'Developing Skill';
    case 'needs-support':
      return 'Needs Support';
    case 'not-assessed':
      return 'Not Assessed';
  }
}

export function getStatusColor(status: MasteryStatus): string {
  switch (status) {
    case 'secure':
      return 'text-emerald-600';
    case 'developing':
      return 'text-amber-600';
    case 'needs-support':
      return 'text-rose-600';
    case 'not-assessed':
      return 'text-gray-400';
  }
}

export function getStatusBadgeBg(status: MasteryStatus): string {
  switch (status) {
    case 'secure':
      return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    case 'developing':
      return 'bg-amber-50 text-amber-700 border-amber-200';
    case 'needs-support':
      return 'bg-rose-50 text-rose-700 border-rose-200';
    case 'not-assessed':
      return 'bg-gray-50 text-gray-600 border-gray-200';
  }
}

/**
 * Generate detailed WHY panel explanation for a skill classification.
 */
export function buildWhyExplanation(profile: SubSkillProfile): {
  evidenceSummary: string[];
  interpretation: string;
  confidence: number;
  nextAction: string;
} {
  const { evidence, status, confidence, skillName } = profile;

  const evidenceSummary = evidence.length > 0
    ? evidence.map((e) => `${e.correct ? '✓' : '✗'} "${e.question}" → Response: "${e.response}"`)
    : ['No diagnostic evidence collected yet for this specific skill.'];

  let interpretation = '';
  switch (status) {
    case 'secure':
      interpretation = `Learner demonstrates comfortable fluency in ${skillName}. Evidence confirms independent application with high accuracy across diagnostic prompts.`;
      break;
    case 'developing':
      interpretation = `Learner shows foundational grasp of ${skillName}, but consistency fluctuates when complexity or text length increases.`;
      break;
    case 'needs-support':
      interpretation = `Learner experiences significant breakdown at the ${skillName} level. Diagnostic probes indicate potential prerequisite bottlenecks that require immediate intervention.`;
      break;
    case 'not-assessed':
      interpretation = `${skillName} has not been directly probed in recent assessments.`;
      break;
  }

  return {
    evidenceSummary,
    interpretation,
    confidence,
    nextAction: profile.nextAction || `Targeted practice for ${skillName}.`,
  };
}

/**
 * Generate default Learning DNA fingerprint for synthetic demo learners.
 */
export function generateDefaultLearningDNA(subject: Subject, currentLevel: SkillLevel): SubSkillProfile[] {
  const path = getSkillPath(subject);
  const targetIndex = path.findIndex((node) => node.level === currentLevel);

  return path.map((node, index) => {
    let status: MasteryStatus = 'not-assessed';
    let confidence = 0;

    if (index < targetIndex) {
      status = 'secure';
      confidence = 92 + Math.floor(Math.random() * 6);
    } else if (index === targetIndex) {
      status = 'developing';
      confidence = 74 + Math.floor(Math.random() * 10);
    } else if (index === targetIndex + 1) {
      status = 'needs-support';
      confidence = 82 + Math.floor(Math.random() * 8);
    }

    const dummyEvidence: Evidence[] = status !== 'not-assessed' ? [
      {
        questionId: `${node.id}-q1`,
        question: `Sample diagnostic probe for ${node.name}`,
        response: status === 'secure' ? 'Correct answer' : 'Incorrect response',
        correct: status === 'secure',
        timestamp: new Date().toISOString(),
        skill: node.id,
        difficulty: 2,
      }
    ] : [];

    return {
      skillId: node.id,
      skillName: node.name,
      subject,
      level: node.level,
      status,
      confidence,
      expectedLevel: node.level,
      evidence: dummyEvidence,
      nextAction: status === 'secure' 
        ? `Consolidate mastery of ${node.name}` 
        : status === 'developing' 
        ? `Guided practice for ${node.name}` 
        : `Immediate 1-on-1 intervention for ${node.name}`,
    };
  });
}
