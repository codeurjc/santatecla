import {User} from '../../auth/login.service';

export interface TestAnswer {
  id?: number;
  answerText?: string;
  correct?: boolean;

  unitId?: number;
  moduleId?: number;

  user?: User;
}
