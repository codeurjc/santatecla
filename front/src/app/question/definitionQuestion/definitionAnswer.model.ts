import { User } from '../../auth/login.service';

export interface DefinitionAnswer {
    id?: number;
    answerText: string;
    correct?: boolean;
    corrected?: boolean;
    justification?: string;

    user?: User;
    unitId?: number;
    moduleId?: number;
}
