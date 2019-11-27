import { Slide } from '../slide/slide.model';

export interface Itineray {
  id?: number;
  name: string;
  slides?: Slide[];
}
