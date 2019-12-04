import { Slide } from '../slide/slide.model';
import {Block} from './block.model';

export interface Itineray extends Block{
  id?: number;
  name: string;
  slides?: Slide[];
}
