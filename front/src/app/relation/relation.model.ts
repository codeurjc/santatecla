import { Unit } from '../unit/unit.model';

export interface Relation {
  id?: number;
  relationType: string;
  relatedTo: Unit;
}
