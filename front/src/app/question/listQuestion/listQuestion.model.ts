export interface ListQuestion {
  id?: number;
  questionText: string;
  possibleAnswers: string[];
  correctAnswers?: string[];
  totalCorrectAnswers ?: number;
  totalWrongAnswers ?: number;
}
