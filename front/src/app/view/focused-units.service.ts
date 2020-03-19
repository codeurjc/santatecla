import { Injectable } from '@angular/core';

@Injectable()
export class FocusedUnitsService {

  focusedUnits: Set<string> = new Set<string>();

}
