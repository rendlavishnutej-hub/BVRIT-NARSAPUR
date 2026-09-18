// ============================================
// Pragya — Learning Graph
// Prerequisite relationships between skills
// ============================================

import { SkillNode, LearningGraphData, Subject } from './types';

// --- Reading Skill Nodes ---

export const readingNodes: SkillNode[] = [
  {
    id: 'letter',
    name: 'Letter Recognition',
    subject: 'reading',
    level: 'letter',
    prerequisites: [],
    description: 'Can the child recognise and name letters of the alphabet?',
    emoji: '🌱',
    gradeExpectation: 1,
  },
  {
    id: 'word',
    name: 'Word Reading',
    subject: 'reading',
    level: 'word',
    prerequisites: ['letter'],
    description: 'Can the child read simple, common words?',
    emoji: '🔤',
    gradeExpectation: 1,
  },
  {
    id: 'paragraph',
    name: 'Paragraph Reading',
    subject: 'reading',
    level: 'paragraph',
    prerequisites: ['word'],
    description: 'Can the child read a short paragraph (Std I level text)?',
    emoji: '📖',
    gradeExpectation: 2,
  },
  {
    id: 'story',
    name: 'Story Reading',
    subject: 'reading',
    level: 'story',
    prerequisites: ['paragraph'],
    description: 'Can the child read a short story (Std II level text)?',
    emoji: '📚',
    gradeExpectation: 2,
  },
  {
    id: 'comprehension',
    name: 'Reading Comprehension',
    subject: 'reading',
    level: 'story',
    prerequisites: ['story'],
    description: 'Can the child understand and answer questions about what they read?',
    emoji: '🧠',
    gradeExpectation: 3,
  },
];

// --- Numeracy Skill Nodes ---

export const numeracyNodes: SkillNode[] = [
  {
    id: 'number-recognition-1-9',
    name: 'Number Recognition (1–9)',
    subject: 'numeracy',
    level: 'number-recognition-1-9',
    prerequisites: [],
    description: 'Can the child recognise single-digit numbers?',
    emoji: '🔢',
    gradeExpectation: 1,
  },
  {
    id: 'number-recognition-11-99',
    name: 'Number Recognition (11–99)',
    subject: 'numeracy',
    level: 'number-recognition-11-99',
    prerequisites: ['number-recognition-1-9'],
    description: 'Can the child recognise two-digit numbers?',
    emoji: '🔢',
    gradeExpectation: 1,
  },
  {
    id: 'place-value',
    name: 'Place Value',
    subject: 'numeracy',
    level: 'number-recognition-11-99',
    prerequisites: ['number-recognition-11-99'],
    description: 'Does the child understand tens and ones?',
    emoji: '🧮',
    gradeExpectation: 2,
  },
  {
    id: 'addition',
    name: 'Addition',
    subject: 'numeracy',
    level: 'subtraction',
    prerequisites: ['place-value'],
    description: 'Can the child add numbers with carrying?',
    emoji: '➕',
    gradeExpectation: 2,
  },
  {
    id: 'subtraction',
    name: 'Subtraction',
    subject: 'numeracy',
    level: 'subtraction',
    prerequisites: ['addition'],
    description: 'Can the child subtract numbers with borrowing?',
    emoji: '➖',
    gradeExpectation: 3,
  },
  {
    id: 'multiplication',
    name: 'Multiplication',
    subject: 'numeracy',
    level: 'division',
    prerequisites: ['addition'],
    description: 'Can the child multiply numbers?',
    emoji: '✖️',
    gradeExpectation: 3,
  },
  {
    id: 'division',
    name: 'Division',
    subject: 'numeracy',
    level: 'division',
    prerequisites: ['subtraction', 'multiplication'],
    description: 'Can the child divide numbers?',
    emoji: '➗',
    gradeExpectation: 4,
  },
];

// --- Full Graph ---

export const readingGraph: LearningGraphData = {
  nodes: readingNodes,
  edges: [
    { from: 'letter', to: 'word' },
    { from: 'word', to: 'paragraph' },
    { from: 'paragraph', to: 'story' },
    { from: 'story', to: 'comprehension' },
  ],
};

export const numeracyGraph: LearningGraphData = {
  nodes: numeracyNodes,
  edges: [
    { from: 'number-recognition-1-9', to: 'number-recognition-11-99' },
    { from: 'number-recognition-11-99', to: 'place-value' },
    { from: 'place-value', to: 'addition' },
    { from: 'addition', to: 'subtraction' },
    { from: 'addition', to: 'multiplication' },
    { from: 'subtraction', to: 'division' },
    { from: 'multiplication', to: 'division' },
  ],
};

// --- Graph Utilities ---

/**
 * Get all prerequisite skill IDs for a given skill (recursive).
 */
export function getPrerequisites(skillId: string, subject: Subject): string[] {
  const nodes = subject === 'reading' ? readingNodes : numeracyNodes;
  const node = nodes.find((n) => n.id === skillId);
  if (!node) return [];

  const allPrereqs: string[] = [];
  const queue = [...node.prerequisites];

  while (queue.length > 0) {
    const current = queue.shift()!;
    if (!allPrereqs.includes(current)) {
      allPrereqs.push(current);
      const currentNode = nodes.find((n) => n.id === current);
      if (currentNode) {
        queue.push(...currentNode.prerequisites);
      }
    }
  }

  return allPrereqs;
}

/**
 * Get the next skill(s) after a given skill.
 */
export function getNextSkills(skillId: string, subject: Subject): string[] {
  const graph = subject === 'reading' ? readingGraph : numeracyGraph;
  return graph.edges
    .filter((e) => e.from === skillId)
    .map((e) => e.to);
}

/**
 * Find the likely bottleneck — the highest prerequisite that is NOT mastered.
 */
export function findBottleneck(
  failedSkillId: string,
  masteredSkills: string[],
  subject: Subject
): string | null {
  const prereqs = getPrerequisites(failedSkillId, subject);

  // Walk from highest prerequisite down to find the first unmastered one
  for (const prereq of prereqs) {
    if (!masteredSkills.includes(prereq)) {
      return prereq;
    }
  }

  return null; // All prerequisites are mastered — the issue is at the current skill level
}

/**
 * Get the ordered skill path for a subject (topological order).
 */
export function getSkillPath(subject: Subject): SkillNode[] {
  const nodes = subject === 'reading' ? readingNodes : numeracyNodes;
  return [...nodes]; // Already in topological order
}

/**
 * Get a skill node by ID.
 */
export function getSkillNode(skillId: string): SkillNode | undefined {
  return [...readingNodes, ...numeracyNodes].find((n) => n.id === skillId);
}
