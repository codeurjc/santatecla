import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Unit } from './unit.model';
import { DefinitionQuestion } from '../question/definitionQuestion/definitionQuestion.model';
import { ListQuestion } from '../question/listQuestion/listQuestion.model';
import { TestQuestion } from '../question/testQuestion/testQuestion.model';
import {DefinitionAnswer} from '../question/definitionQuestion/definitionAnswer.model';

@Injectable()
export class UnitService {

  baseUrl = '/api/units/';

  constructor(private http: HttpClient) {}

  getUnits() {
    return this.http.get(this.baseUrl);
  }

  getUnit(id: number) {
    return this.http.get(this.baseUrl + id);
  }

  searchByNameContaining(name: string) {
    const params = new HttpParams().set('name', name);
    return this.http.get(this.baseUrl + 'search/', { params: params });
  }

  createUnit(unit: Unit) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<Unit>(this.baseUrl, unit, { headers });
  }

  saveUnits(units: Unit[]) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.put<Unit[]>(this.baseUrl, units, { headers });
  }

  getAbsoluteName(id: number) {
    return this.http.get(this.baseUrl + id + '/absoluteName');
  }

  getParent(id: number) {
    return this.http.get(this.baseUrl + id + '/parent');
  }

  getCard(cardId: number, unitId: number) {
    return this.http.get(this.baseUrl + unitId + '/cards/' + cardId);
  }
}
