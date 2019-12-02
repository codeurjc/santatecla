import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Unit } from './unit.model';
import { DefinitionQuestion } from '../question/definitionQuestion/definitionQuestion.model';
import { ListQuestion } from '../question/listQuestion/listQuestion.model';
import { TestQuestion } from '../question/testQuestion/testQuestion.model';
import {Itineray} from "../itinerary/itinerary.model";
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

  getSlideFormItinerary(slideId: number, itineraryId: number, unitId: number) {
    return this.http.get(this.baseUrl + unitId + '/itineraries/' + itineraryId + '/slides/' + slideId);
  }

  addItinerary(unitId: number, itinerary: Itineray) {
    const body = JSON.stringify(itinerary);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<Itineray>(this.baseUrl + unitId + '/itineraries', body, { headers });
  }

  deleteItinerary(unitId: number, itineraryId: number) {
    return this.http.delete<Itineray>(this.baseUrl + unitId + '/itineraries/' + itineraryId);
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

  addUnitDefinitionAnswer(unitID, questionID: number, answer: DefinitionAnswer) {
    const body = JSON.stringify(answer);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(this.baseUrl + unitID + '/question/definition/' + questionID + '/answer', body, {headers});
  }
}
