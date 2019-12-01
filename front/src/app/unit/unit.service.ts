import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Unit } from './unit.model';
import { DefinitionQuestion } from '../question/definitionQuestion/definitionQuestion.model';
import { ListQuestion } from '../question/listQuestion/listQuestion.model';
import { TestQuestion } from '../question/testQuestion/testQuestion.model';

@Injectable()
export class UnitService {

  baseUrl = '/api/units/';

  constructor(private http: HttpClient) {}

  getUnit(id: number) {
    return this.http.get(this.baseUrl + id);
  }

  searchByNameContaining(name: string) {
    return this.http.get(this.baseUrl + 'search/' + name);
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

  getCardByName(cardName: string, unitId: number) {
    return this.http.get(this.baseUrl + unitId + '/cards/' + cardName);
  }

  getUnitDefinitionQuestions(id: number) {
    return this.http.get(this.baseUrl + id + '/question/definition');
  }

  getUnitListQuestions(id: number) {
    return this.http.get(this.baseUrl + id + '/question/list');
  }

  getUnitTestQuestions(id: number) {
    return this.http.get(this.baseUrl + id + '/question/test');
  }

  addUnitDefinitionQuestion(id: number, question: DefinitionQuestion) {
    const body = JSON.stringify(question);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<DefinitionQuestion>(this.baseUrl + id + '/question/definition', body, {headers});
  }

  deleteUnitDefinitionQuestion(unitID, questionID: number) {
    return this.http.delete(this.baseUrl + unitID + '/question/definition/' + questionID);
  }

  addUnitListQuestion(id: number, question: ListQuestion) {
    const body = JSON.stringify(question);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<ListQuestion>(this.baseUrl + id + '/question/list', body, {headers});
  }

  deleteUnitListQuestion(unitID, questionID: number) {
    return this.http.delete(this.baseUrl + unitID + '/question/list/' + questionID);
  }

  addUnitTestQuestion(id: number, question: TestQuestion) {
    const body = JSON.stringify(question);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<TestQuestion>(this.baseUrl + id + '/question/test', body, {headers});
  }

  deleteUnitTestQuestion(unitID, questionID: number) {
    return this.http.delete(this.baseUrl + unitID + '/question/test/' + questionID);
  }

  addUnitDefinitionAnswer(unitID, questionID: number, answer) {
    const body = JSON.stringify(answer);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(this.baseUrl + unitID + '/question/definition/' + questionID + '/answer', body, {headers});
  }
}
