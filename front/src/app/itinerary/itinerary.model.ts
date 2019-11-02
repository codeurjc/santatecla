import { Slide } from '../slide/slide.model';

export interface Itineray {
  id?: number;
  name: string;
  text?: string;
  itineraries?: Itineray[];
  slides?: Slide[];
}
