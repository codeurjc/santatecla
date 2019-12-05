import { Lesson } from '../itinerary/lesson/lesson.model';
import { DefinitionQuestion } from '../question/definitionQuestion/definitionQuestion.model';
import { ListQuestion } from '../question/listQuestion/listQuestion.model';
import { Relation } from '../relation/relation.model';
import { TestQuestion } from '../question/testQuestion/testQuestion.model';
import {Card} from '../card/card.model';

export interface Unit {
  id?: string;
  name: string;
  cards?: Card[];
  outgoingRelations?: Relation[];
  incomingRelations?: Relation[];
  itineraries?: Lesson[];
  definitionQuestions?: DefinitionQuestion[];
  listQuestions?: ListQuestion[];
  testQuestions ?: TestQuestion[];
  questionsDone ?: number;
}
