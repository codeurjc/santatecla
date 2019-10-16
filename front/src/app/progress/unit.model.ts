import { DefinitionQuestion } from '../questions/definitionQuestion.model';
import { ListQuestion } from '../questions/listQuestion.model';

export interface Unit{
    id?: number;
    name: string;
    definitionQuestions: DefinitionQuestion[];
    listQuestions: ListQuestion[];
  }