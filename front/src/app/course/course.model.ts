import {Unit} from '../unit/unit.model';
import {User} from '../auth/login.service';

export interface Course {
  id?: number;
  name: string;
  description: string;
  units?: Unit[];
  students?: User[];
  teacher?: User;
}
