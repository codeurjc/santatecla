import { Itineray } from './../itinerary/itinerary.model';
import { DefinitionQuestion } from '../question/definitionQuestion/definitionQuestion.model';
import { ListQuestion } from '../question/listQuestion/listQuestion.model';

export interface Unit {
  id?: number;
  name: string;
  itineraries?: Itineray[];
  definitionQuestions?: DefinitionQuestion[];
  listQuestions?: ListQuestion[];
}
