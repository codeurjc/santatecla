import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Unit } from './unit.model';
import { DefinitionQuestion } from '../question/definitionQuestion/definitionQuestion.model';
import { ListQuestion } from '../question/listQuestion/listQuestion.model';
import { TestQuestion } from '../question/testQuestion/testQuestion.model';
import {Lesson} from "../itinerary/lesson/lesson.model";
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

  getParent(id: number) {
    return this.http.get(this.baseUrl + id + '/parent');
  }

  getCard(cardId: number, unitId: number) {
    return this.http.get(this.baseUrl + unitId + '/cards/' + cardId);
  }

  getSlideFormLesson(slideId: number, lessonId: number, unitId: number) {
    return this.http.get(this.baseUrl + unitId + '/lessons/' + lessonId + '/slides/' + slideId);
  }

  addLesson(unitId: number, lesson: Lesson) {
    const body = JSON.stringify(lesson);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<Lesson>(this.baseUrl + unitId + '/lessons', body, { headers });
  }

  deleteLesson(unitId: number, lessonId: number) {
    return this.http.delete<Lesson>(this.baseUrl + unitId + '/lessons/' + lessonId);
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

  deleteUnitQuestion(unitID, questionID: number) {
    return this.http.delete(this.baseUrl + unitID + '/question/' + questionID);
  }

  addUnitDefinitionAnswer(unitID, questionID: number, answer: DefinitionAnswer) {
    const body = JSON.stringify(answer);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(this.baseUrl + unitID + '/question/definition/' + questionID + '/answer', body, {headers});
  }
}
