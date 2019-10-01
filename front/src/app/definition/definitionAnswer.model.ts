import { User } from '../auth/login.service';

export interface DefinitionAnswer{
    id?: number;
    answerText: string;
    correct?: boolean;
    justifications?: string[];
    user ?: User;
  }