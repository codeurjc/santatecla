import {User} from '../../auth/login.service';

export interface ListAnswer {
  id?: number;
  answer: string[];
  correct?: boolean;

  unitId?: number;
  moduleId?: number;

  user?: User;
}
