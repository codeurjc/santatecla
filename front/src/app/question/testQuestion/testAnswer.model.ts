import {User} from '../../auth/login.service';

export interface TestAnswer {
  id?: number;
  answerText?: string;
  correct?: boolean;
  user?: User;
  possibleAnswers ?: string[];
  unitId?: number;
}