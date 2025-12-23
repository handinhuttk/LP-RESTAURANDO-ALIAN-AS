export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: number;
  title: string;
  question: string;
  options: Option[];
}

export type ScreenState = 'intro' | 'quiz' | 'analyzing' | 'result' | 'offer';

export interface UserAnswers {
  [key: number]: string; // questionId: optionId
}
