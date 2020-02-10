import { User } from '../../auth/login.service';

export interface DefinitionAnswer {
    id?: number;
    answerText: string;
    correct?: boolean;
    corrected?: boolean;
    justification?: string;

    unitId?: number;
    moduleId?: number;

    user?: User;
}
