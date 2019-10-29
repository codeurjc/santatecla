import { Question } from './../question/question.model';
import { Card } from './../card/card.model';

export interface Slide {
  id?: number;
  type?: string;
  cards?: Card[];
  questions?: Question[];
}
