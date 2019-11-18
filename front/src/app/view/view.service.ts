import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Unit } from '../unit/unit.model';
import {DefinitionQuestion} from '../question/definitionQuestion/definitionQuestion.model';
import {ListQuestion} from '../question/listQuestion/listQuestion.model';
import {TestQuestion} from '../question/testQuestion/testQuestion.model';

@Injectable()
export class ViewService {

  baseUrl = '/api/units/';

  constructor(private http: HttpClient) {}

  getUnits() {
    return this.http.get(this.baseUrl);
  }

  getUnit(id: number) {
    return this.http.get(this.baseUrl + id);
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

  addUnitListQuestion(id: number, question: ListQuestion) {
    const body = JSON.stringify(question);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<ListQuestion>(this.baseUrl + id + '/question/list', body, {headers});
  }

  addUnitTestQuestion(id: number, question: TestQuestion) {
    const body = JSON.stringify(question);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<TestQuestion>(this.baseUrl + id + '/question/test', body, {headers});
  }

  searchByNameContaining(name: string) {
    return this.http.get(this.baseUrl + 'search/' + name);
  }

  saveUnit(data) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.put<Unit>(this.baseUrl, data, { headers });
  }

}
