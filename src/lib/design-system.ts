export const colors = {
  peach: '#FFBE91',
  softPeach: '#FFDDB0',
  warmIvory: '#FFFCE1',
  skyBlue: '#CFEBFF',
  charcoal: '#2D2D2D',
  // Semantic
  primary: '#FFBE91',
  secondary: '#FFDDB0',
  background: '#FFFCE1',
  accent: '#CFEBFF',
  text: '#2D2D2D',
  // Status
  success: '#4CAF50',
  developing: '#FFC107',
  needsSupport: '#FF7043',
  notAssessed: '#E0E0E0',
  // Mastery levels
  secure: '#4CAF50',
  developingLevel: '#FFC107',
  needsSupportLevel: '#FF7043',
  beginner: '#E0E0E0',
} as const;

export const fonts = {
  heading: '"Nunito", "Inter", sans-serif',
  body: '"Inter", "Nunito", sans-serif',
} as const;

export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
} as const;

export const borderRadius = {
  sm: '0.5rem',
  md: '0.75rem',
  lg: '1rem',
  xl: '1.5rem',
  full: '9999px',
} as const;

export type MasteryLevel = 'secure' | 'developing' | 'needs-support' | 'not-assessed';

export const masteryColors: Record<MasteryLevel, string> = {
  'secure': colors.success,
  'developing': colors.developing,
  'needs-support': colors.needsSupport,
  'not-assessed': colors.notAssessed,
};

export const masteryLabels: Record<MasteryLevel, string> = {
  'secure': 'Demonstrated',
  'developing': 'Developing',
  'needs-support': 'Needs Support',
  'not-assessed': 'Not Assessed',
};
