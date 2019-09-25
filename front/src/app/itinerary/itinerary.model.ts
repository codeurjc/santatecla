import { Slide } from '../slide/slide.model';

export interface Itineray {
  id?: number;
  name: string;
  // units: Unit[];
  itineraries: Itineray[];
  slides: Slide[];
}
