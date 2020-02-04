export interface Answer {
  id?: number;
  answerText: string;
  correct: boolean;
  corrected: boolean;

  justification?: string;

  unitId?: number;
  moduleId?: number;
}
