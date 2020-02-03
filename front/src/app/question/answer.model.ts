export interface Answer {
  id?: number;
  answerText: string;
  correct: boolean;

  justification?: string;

  unitId?: number;
  moduleId?: number;
}
