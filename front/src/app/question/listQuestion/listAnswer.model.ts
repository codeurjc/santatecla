import {User} from '../../auth/login.service';

export interface ListAnswer {
  id?: number;
  answerText?: string;
  correct?: boolean;
  user?: User;
  unitId?: number;
}
