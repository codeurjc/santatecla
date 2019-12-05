import { Slide } from '../../slide/slide.model';
import {Block} from '../block.model';

export interface Lesson extends Block {
  id?: number;
  name: string;
  slides?: Slide[];
}
