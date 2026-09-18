// ============================================
// Pragya — Question Bank
// ASER-aligned assessment items for reading & numeracy
// All content uses B1-level simple English
// ============================================

import { Question } from './types';

// ============================================
// READING QUESTIONS
// ============================================

export const readingQuestions: Question[] = [
  // --- Letter Recognition ---
  {
    id: 'r-letter-01',
    subject: 'reading',
    skill: 'letter',
    level: 'letter',
    difficulty: 1,
    questionText: 'Which letter is this?  A',
    options: ['A', 'B', 'D', 'E'],
    correctAnswer: 'A',
    diagnosticValue: 3,
    prerequisiteSkills: [],
  },
  {
    id: 'r-letter-02',
    subject: 'reading',
    skill: 'letter',
    level: 'letter',
    difficulty: 1,
    questionText: 'Which letter is this?  M',
    options: ['N', 'M', 'W', 'H'],
    correctAnswer: 'M',
    diagnosticValue: 3,
    prerequisiteSkills: [],
  },
  {
    id: 'r-letter-03',
    subject: 'reading',
    skill: 'letter',
    level: 'letter',
    difficulty: 2,
    questionText: 'Which letter is this?  G',
    options: ['C', 'O', 'G', 'Q'],
    correctAnswer: 'G',
    diagnosticValue: 4,
    prerequisiteSkills: [],
  },
  {
    id: 'r-letter-04',
    subject: 'reading',
    skill: 'letter',
    level: 'letter',
    difficulty: 2,
    questionText: 'Which letter comes after D?',
    options: ['C', 'E', 'F', 'B'],
    correctAnswer: 'E',
    diagnosticValue: 4,
    prerequisiteSkills: [],
  },

  // --- Word Reading ---
  {
    id: 'r-word-01',
    subject: 'reading',
    skill: 'word',
    level: 'word',
    difficulty: 2,
    questionText: 'Read this word: CAT. What does it say?',
    options: ['cat', 'car', 'cap', 'can'],
    correctAnswer: 'cat',
    diagnosticValue: 3,
    prerequisiteSkills: ['letter'],
  },
  {
    id: 'r-word-02',
    subject: 'reading',
    skill: 'word',
    level: 'word',
    difficulty: 2,
    questionText: 'Read this word: SUN. What does it say?',
    options: ['sun', 'run', 'fun', 'bun'],
    correctAnswer: 'sun',
    diagnosticValue: 3,
    prerequisiteSkills: ['letter'],
  },
  {
    id: 'r-word-03',
    subject: 'reading',
    skill: 'word',
    level: 'word',
    difficulty: 3,
    questionText: 'Read this word: HAPPY. What does it say?',
    options: ['happy', 'help', 'hippo', 'hope'],
    correctAnswer: 'happy',
    diagnosticValue: 4,
    prerequisiteSkills: ['letter'],
  },
  {
    id: 'r-word-04',
    subject: 'reading',
    skill: 'word',
    level: 'word',
    difficulty: 3,
    questionText: 'Which word means a place where you live?',
    options: ['house', 'horse', 'hose', 'hope'],
    correctAnswer: 'house',
    diagnosticValue: 4,
    prerequisiteSkills: ['letter'],
  },

  // --- Paragraph Reading (Std I level) ---
  {
    id: 'r-para-01',
    subject: 'reading',
    skill: 'paragraph',
    level: 'paragraph',
    difficulty: 3,
    questionText: 'Read this: "The dog sat on the mat. It was a big brown dog." What colour was the dog?',
    options: ['brown', 'black', 'white', 'red'],
    correctAnswer: 'brown',
    diagnosticValue: 5,
    prerequisiteSkills: ['word'],
  },
  {
    id: 'r-para-02',
    subject: 'reading',
    skill: 'paragraph',
    level: 'paragraph',
    difficulty: 3,
    questionText: 'Read this: "Ravi has a red ball. He plays with it every day." What does Ravi have?',
    options: ['a red ball', 'a blue bat', 'a green bag', 'a yellow hat'],
    correctAnswer: 'a red ball',
    diagnosticValue: 5,
    prerequisiteSkills: ['word'],
  },
  {
    id: 'r-para-03',
    subject: 'reading',
    skill: 'paragraph',
    level: 'paragraph',
    difficulty: 4,
    questionText: 'Read this: "The bird sits on the tree. It sings a sweet song. The children listen and smile." Who listens to the bird?',
    options: ['the children', 'the tree', 'the bird', 'the teacher'],
    correctAnswer: 'the children',
    diagnosticValue: 5,
    prerequisiteSkills: ['word'],
  },
  {
    id: 'r-para-04',
    subject: 'reading',
    skill: 'paragraph',
    level: 'paragraph',
    difficulty: 4,
    questionText: 'Read this: "Meena goes to school by bus. The bus is yellow. She sits near the window." How does Meena go to school?',
    options: ['by bus', 'by car', 'she walks', 'by train'],
    correctAnswer: 'by bus',
    diagnosticValue: 5,
    prerequisiteSkills: ['word'],
  },

  // --- Story Reading (Std II level) ---
  {
    id: 'r-story-01',
    subject: 'reading',
    skill: 'story',
    level: 'story',
    difficulty: 4,
    questionText: 'Read: "One day, a fox saw some grapes on a tall vine. He jumped and jumped but could not reach them. He walked away and said, the grapes are sour anyway." Why did the fox walk away?',
    options: [
      'He could not reach the grapes',
      'He was not hungry',
      'The grapes were green',
      'Someone called him',
    ],
    correctAnswer: 'He could not reach the grapes',
    diagnosticValue: 5,
    prerequisiteSkills: ['paragraph'],
  },
  {
    id: 'r-story-02',
    subject: 'reading',
    skill: 'story',
    level: 'story',
    difficulty: 4,
    questionText: 'Read: "Rani planted a seed in her garden. She watered it every day. After many days, a small plant grew. Rani was very happy." Why was Rani happy?',
    options: [
      'Her plant grew',
      'She got a new toy',
      'It was her birthday',
      'She went to school',
    ],
    correctAnswer: 'Her plant grew',
    diagnosticValue: 5,
    prerequisiteSkills: ['paragraph'],
  },
  {
    id: 'r-story-03',
    subject: 'reading',
    skill: 'story',
    level: 'story',
    difficulty: 5,
    questionText: 'Read: "The ant worked hard all summer, gathering food. The grasshopper played and sang. When winter came, the ant had food but the grasshopper was hungry." What is the lesson of this story?',
    options: [
      'It is good to work hard and prepare',
      'Playing is more fun than working',
      'Ants are stronger than grasshoppers',
      'Winter is a bad season',
    ],
    correctAnswer: 'It is good to work hard and prepare',
    diagnosticValue: 5,
    prerequisiteSkills: ['paragraph'],
  },
  {
    id: 'r-story-04',
    subject: 'reading',
    skill: 'story',
    level: 'story',
    difficulty: 5,
    questionText: 'Read: "A thirsty crow saw a pot with a little water. The water was too low to drink. The crow put small stones in the pot. The water came up and the crow drank it." How did the crow get the water?',
    options: [
      'By putting stones in the pot',
      'By breaking the pot',
      'By asking for help',
      'By waiting for rain',
    ],
    correctAnswer: 'By putting stones in the pot',
    diagnosticValue: 5,
    prerequisiteSkills: ['paragraph'],
  },
];

// ============================================
// NUMERACY QUESTIONS
// ============================================

export const numeracyQuestions: Question[] = [
  // --- Number Recognition 1–9 ---
  {
    id: 'n-num1-01',
    subject: 'numeracy',
    skill: 'number-recognition-1-9',
    level: 'number-recognition-1-9',
    difficulty: 1,
    questionText: 'What number is this? 5',
    options: ['3', '5', '6', '8'],
    correctAnswer: '5',
    diagnosticValue: 3,
    prerequisiteSkills: [],
  },
  {
    id: 'n-num1-02',
    subject: 'numeracy',
    skill: 'number-recognition-1-9',
    level: 'number-recognition-1-9',
    difficulty: 1,
    questionText: 'What number is this? 8',
    options: ['6', '3', '8', '9'],
    correctAnswer: '8',
    diagnosticValue: 3,
    prerequisiteSkills: [],
  },
  {
    id: 'n-num1-03',
    subject: 'numeracy',
    skill: 'number-recognition-1-9',
    level: 'number-recognition-1-9',
    difficulty: 2,
    questionText: 'Which number comes after 6?',
    options: ['5', '7', '8', '4'],
    correctAnswer: '7',
    diagnosticValue: 4,
    prerequisiteSkills: [],
  },
  {
    id: 'n-num1-04',
    subject: 'numeracy',
    skill: 'number-recognition-1-9',
    level: 'number-recognition-1-9',
    difficulty: 2,
    questionText: 'Which is the biggest number?',
    options: ['3', '7', '2', '9'],
    correctAnswer: '9',
    diagnosticValue: 4,
    prerequisiteSkills: [],
  },

  // --- Number Recognition 11–99 ---
  {
    id: 'n-num2-01',
    subject: 'numeracy',
    skill: 'number-recognition-11-99',
    level: 'number-recognition-11-99',
    difficulty: 2,
    questionText: 'What number is this? 27',
    options: ['27', '72', '37', '23'],
    correctAnswer: '27',
    diagnosticValue: 4,
    prerequisiteSkills: ['number-recognition-1-9'],
  },
  {
    id: 'n-num2-02',
    subject: 'numeracy',
    skill: 'number-recognition-11-99',
    level: 'number-recognition-11-99',
    difficulty: 2,
    questionText: 'What number is this? 54',
    options: ['45', '54', '44', '55'],
    correctAnswer: '54',
    diagnosticValue: 4,
    prerequisiteSkills: ['number-recognition-1-9'],
  },
  {
    id: 'n-num2-03',
    subject: 'numeracy',
    skill: 'number-recognition-11-99',
    level: 'number-recognition-11-99',
    difficulty: 3,
    questionText: 'Which number comes between 48 and 50?',
    options: ['47', '49', '51', '48'],
    correctAnswer: '49',
    diagnosticValue: 5,
    prerequisiteSkills: ['number-recognition-1-9'],
  },
  {
    id: 'n-num2-04',
    subject: 'numeracy',
    skill: 'number-recognition-11-99',
    level: 'number-recognition-11-99',
    difficulty: 3,
    questionText: 'Which is the biggest? 34, 87, 56, 19',
    options: ['34', '87', '56', '19'],
    correctAnswer: '87',
    diagnosticValue: 5,
    prerequisiteSkills: ['number-recognition-1-9'],
  },

  // --- Place Value ---
  {
    id: 'n-pv-01',
    subject: 'numeracy',
    skill: 'place-value',
    level: 'number-recognition-11-99',
    difficulty: 3,
    questionText: 'In the number 36, what is the value of 3?',
    options: ['3', '30', '6', '36'],
    correctAnswer: '30',
    diagnosticValue: 5,
    prerequisiteSkills: ['number-recognition-11-99'],
  },
  {
    id: 'n-pv-02',
    subject: 'numeracy',
    skill: 'place-value',
    level: 'number-recognition-11-99',
    difficulty: 3,
    questionText: 'In the number 72, how many tens are there?',
    options: ['2', '7', '72', '27'],
    correctAnswer: '7',
    diagnosticValue: 5,
    prerequisiteSkills: ['number-recognition-11-99'],
  },
  {
    id: 'n-pv-03',
    subject: 'numeracy',
    skill: 'place-value',
    level: 'number-recognition-11-99',
    difficulty: 4,
    questionText: 'What is the value of 4 in 472?',
    options: ['4', '40', '400', '472'],
    correctAnswer: '400',
    diagnosticValue: 5,
    prerequisiteSkills: ['number-recognition-11-99'],
  },
  {
    id: 'n-pv-04',
    subject: 'numeracy',
    skill: 'place-value',
    level: 'number-recognition-11-99',
    difficulty: 4,
    questionText: '50 + 8 = ?',
    options: ['508', '58', '85', '580'],
    correctAnswer: '58',
    diagnosticValue: 5,
    prerequisiteSkills: ['number-recognition-11-99'],
  },

  // --- Subtraction ---
  {
    id: 'n-sub-01',
    subject: 'numeracy',
    skill: 'subtraction',
    level: 'subtraction',
    difficulty: 3,
    questionText: '9 − 4 = ?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '5',
    diagnosticValue: 4,
    prerequisiteSkills: ['place-value'],
  },
  {
    id: 'n-sub-02',
    subject: 'numeracy',
    skill: 'subtraction',
    level: 'subtraction',
    difficulty: 3,
    questionText: '15 − 7 = ?',
    options: ['7', '8', '9', '6'],
    correctAnswer: '8',
    diagnosticValue: 4,
    prerequisiteSkills: ['place-value'],
  },
  {
    id: 'n-sub-03',
    subject: 'numeracy',
    skill: 'subtraction',
    level: 'subtraction',
    difficulty: 4,
    questionText: '53 − 28 = ?',
    options: ['25', '35', '15', '31'],
    correctAnswer: '25',
    diagnosticValue: 5,
    prerequisiteSkills: ['place-value'],
  },
  {
    id: 'n-sub-04',
    subject: 'numeracy',
    skill: 'subtraction',
    level: 'subtraction',
    difficulty: 4,
    questionText: '100 − 37 = ?',
    options: ['73', '63', '67', '57'],
    correctAnswer: '63',
    diagnosticValue: 5,
    prerequisiteSkills: ['place-value'],
  },

  // --- Division ---
  {
    id: 'n-div-01',
    subject: 'numeracy',
    skill: 'division',
    level: 'division',
    difficulty: 4,
    questionText: '12 ÷ 3 = ?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '4',
    diagnosticValue: 5,
    prerequisiteSkills: ['subtraction'],
  },
  {
    id: 'n-div-02',
    subject: 'numeracy',
    skill: 'division',
    level: 'division',
    difficulty: 4,
    questionText: '20 ÷ 5 = ?',
    options: ['3', '4', '5', '2'],
    correctAnswer: '4',
    diagnosticValue: 5,
    prerequisiteSkills: ['subtraction'],
  },
  {
    id: 'n-div-03',
    subject: 'numeracy',
    skill: 'division',
    level: 'division',
    difficulty: 5,
    questionText: '56 ÷ 8 = ?',
    options: ['6', '7', '8', '9'],
    correctAnswer: '7',
    diagnosticValue: 5,
    prerequisiteSkills: ['subtraction'],
  },
  {
    id: 'n-div-04',
    subject: 'numeracy',
    skill: 'division',
    level: 'division',
    difficulty: 5,
    questionText: 'A teacher has 36 pencils. She gives them equally to 4 students. How many pencils does each student get?',
    options: ['7', '8', '9', '10'],
    correctAnswer: '9',
    diagnosticValue: 5,
    prerequisiteSkills: ['subtraction'],
  },
];

// --- All questions ---
export const allQuestions: Question[] = [...readingQuestions, ...numeracyQuestions];

// --- Utility functions ---

/**
 * Get questions for a specific skill.
 */
export function getQuestionsBySkill(skill: string): Question[] {
  return allQuestions.filter((q) => q.skill === skill);
}

/**
 * Get questions for a specific subject.
 */
export function getQuestionsBySubject(subject: 'reading' | 'numeracy'): Question[] {
  return allQuestions.filter((q) => q.subject === subject);
}

/**
 * Get a question by ID.
 */
export function getQuestionById(id: string): Question | undefined {
  return allQuestions.find((q) => q.id === id);
}

/**
 * Get questions sorted by diagnostic value (most informative first).
 */
export function getHighValueQuestions(skill: string): Question[] {
  return getQuestionsBySkill(skill).sort((a, b) => b.diagnosticValue - a.diagnosticValue);
}
