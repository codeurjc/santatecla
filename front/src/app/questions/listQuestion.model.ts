export interface ListQuestion{
    id?: number;
    questionText: string;
    possibleAnswers: string[];
    correctAnswer ?: string[];
  }