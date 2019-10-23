import { DefinitionQuestion } from '../question/definitionQuestion/definitionQuestion.model';
import { ListQuestion } from '../question/listQuestion/listQuestion.model';

export interface Unit{
    id?: number;
    name: string;
    definitionQuestions: DefinitionQuestion[];
    listQuestions: ListQuestion[];
  }
