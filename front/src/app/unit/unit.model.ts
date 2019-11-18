import { Itineray } from '../itinerary/itinerary.model';
import { DefinitionQuestion } from '../question/definitionQuestion/definitionQuestion.model';
import { ListQuestion } from '../question/listQuestion/listQuestion.model';
import { Relation } from '../relation/relation.model';
import { TestQuestion } from '../question/testQuestion/testQuestion.model';

export interface Unit {
  id?: string;
  name: string;
  outgoingRelations?: Relation[];
  incomingRelations?: Relation[];
  itineraries?: Itineray[];
  definitionQuestions?: DefinitionQuestion[];
  listQuestions?: ListQuestion[];
  testQuestions ?: TestQuestion[];
  questionsDone ?: number;
}
