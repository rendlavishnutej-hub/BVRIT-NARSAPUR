// ============================================
// Pragya — Core Types
// ============================================

// --- Skill & Assessment Types ---

export type Subject = 'reading' | 'numeracy';

export type ReadingLevel = 'beginner' | 'letter' | 'word' | 'paragraph' | 'story';
export type NumeracyLevel = 'beginner' | 'number-recognition-1-9' | 'number-recognition-11-99' | 'subtraction' | 'division';
export type SkillLevel = ReadingLevel | NumeracyLevel;

export type MasteryStatus = 'secure' | 'developing' | 'needs-support' | 'not-assessed';

export interface SubSkillProfile {
  skillId: string;
  skillName: string;
  subject: Subject;
  level: SkillLevel;
  status: MasteryStatus;
  confidence: number; // 0-100
  expectedLevel: SkillLevel;
  evidence: Evidence[];
  nextAction: string;
}

export interface Evidence {
  questionId: string;
  question: string;
  response: string;
  correct: boolean;
  timestamp: string;
  skill: string;
  difficulty: number;
}

// --- Learner Types ---

export interface Learner {
  id: string;
  name: string;
  classroomId: string;
  grade: number;
  age: number;
  avatarEmoji: string;
  skillProfile: SubSkillProfile[];
  xp: number;
  level: number;
  streak: number;
  achievements: Achievement[];
  assessmentHistory: AssessmentSession[];
  groundTruth?: GroundTruth; // For synthetic data validation
}

export interface GroundTruth {
  readingLevel: ReadingLevel;
  numeracyLevel: NumeracyLevel;
  archetype: string;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  emoji: string;
  earnedAt: string;
}

// --- Assessment Types ---

export interface Question {
  id: string;
  subject: Subject;
  skill: string;
  level: SkillLevel;
  difficulty: number; // 1-5
  questionText: string;
  questionTextHindi?: string;
  options?: string[];
  correctAnswer: string;
  audioUrl?: string;
  imageUrl?: string;
  diagnosticValue: number; // How informative this question is
  prerequisiteSkills: string[];
}

export interface AssessmentSession {
  id: string;
  learnerId: string;
  subject: Subject;
  startedAt: string;
  completedAt?: string;
  responses: AssessmentResponse[];
  classifiedLevel: SkillLevel;
  confidence: number;
  skillProfile: SubSkillProfile[];
}

export interface AssessmentResponse {
  questionId: string;
  question: Question;
  selectedAnswer: string;
  correct: boolean;
  timeSpent: number; // seconds
  timestamp: string;
}

// --- Classroom Types ---

export interface Classroom {
  id: string;
  name: string;
  grade: number;
  school: string;
  teacherId: string;
  learnerIds: string[];
  learnerCount: number;
}

// --- Learning Group Types ---

export interface LearningGroup {
  id: string;
  name: string;
  classroomId: string;
  commonSkillGap: string;
  description: string;
  learnerIds: string[];
  evidence: string;
  recommendedActivity: Activity;
  estimatedDuration: string;
  reassessmentSuggestion: string;
  color: string;
}

export interface Activity {
  title: string;
  steps: string[];
  duration: string;
  materials?: string[];
}

// --- Teacher Types ---

export interface Teacher {
  id: string;
  name: string;
  classroomIds: string[];
}

export interface NextAction {
  groupId: string;
  groupName: string;
  reason: string;
  recommendedActivity: string;
  duration: string;
  priority: 'high' | 'medium' | 'low';
}

// --- Learning Graph Types ---

export interface SkillNode {
  id: string;
  name: string;
  subject: Subject;
  level: SkillLevel;
  prerequisites: string[];
  description: string;
  emoji: string;
  gradeExpectation: number; // Expected by which grade
}

export interface LearningGraphData {
  nodes: SkillNode[];
  edges: { from: string; to: string }[];
}

// --- Gamification Types ---

export interface QuestStage {
  id: string;
  name: string;
  emoji: string;
  skill: string;
  level: SkillLevel;
  status: 'locked' | 'current' | 'completed';
  progress: number; // 0-100
  xpReward: number;
}

export interface LearningWorld {
  subject: Subject;
  name: string;
  stages: QuestStage[];
}
