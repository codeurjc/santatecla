import { Card } from '../card/card.model';

export interface Slide {
  id?: number;
  components?: Card[];
  type: string;
}
