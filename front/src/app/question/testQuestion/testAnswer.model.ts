import {User} from '../../auth/login.service';

export interface TestAnswer {
  id?: number;
  answerText?: string;
  correct?: boolean;

  unitId?: number;
  blockId?: number;

  user?: User;
}
