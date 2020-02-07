import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ListQuestion} from './listQuestion/listQuestion.model';
import {DefinitionQuestion} from './definitionQuestion/definitionQuestion.model';
import {TestQuestion} from './testQuestion/testQuestion.model';
import {DefinitionAnswer} from './definitionQuestion/definitionAnswer.model';

@Injectable()
export class QuestionService {

  baseUrl = '/api/units/';

  constructor(private http: HttpClient) {}

  getUnitQuestions(id: number) {
    return this.http.get(this.baseUrl + id + '/question');
  }

  getUnitDefinitionQuestions(id: number) {
    return this.http.get(this.baseUrl + id + '/question/definition');
  }

  getUnitDefinitionQuestion(unitId: number, questionId: number) {
    return this.http.get(this.baseUrl + unitId + '/question/definition/' + questionId);
  }

  getUnitListQuestions(id: number) {
    return this.http.get(this.baseUrl + id + '/question/list');
  }

  getUnitListQuestion(unitId: number, questionId: number) {
    return this.http.get(this.baseUrl + unitId + '/question/list/' + questionId);
  }

  getUnitTestQuestions(id: number) {
    return this.http.get(this.baseUrl + id + '/question/test');
  }

  getUnitTestQuestion(unitId: number, questionId: number) {
    return this.http.get(this.baseUrl + unitId + '/question/test/' + questionId);
  }

  addUnitDefinitionQuestion(id: number, question: DefinitionQuestion) {
    const body = JSON.stringify(question);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<DefinitionQuestion>(this.baseUrl + id + '/question/definition', body, {headers});
  }

  editUnitDefinitionQuestion(unitId: number, questionId: number, question: DefinitionQuestion) {
    const body = JSON.stringify(question);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.put<DefinitionQuestion>(this.baseUrl + unitId + '/question/definition/' + questionId, body, {headers});
  }

  addUnitListQuestion(id: number, question: ListQuestion) {
    const body = JSON.stringify(question);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<ListQuestion>(this.baseUrl + id + '/question/list', body, {headers});
  }

  editUnitListQuestion(unitId: number, questionId: number, question: ListQuestion) {
    const body = JSON.stringify(question);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.put<ListQuestion>(this.baseUrl + unitId + '/question/list/' + questionId, body, {headers});
  }

  addUnitTestQuestion(id: number, question: TestQuestion) {
    const body = JSON.stringify(question);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<TestQuestion>(this.baseUrl + id + '/question/test', body, {headers});
  }

  editUnitTestQuestion(unitId: number, questionId: number, question: TestQuestion) {
    const body = JSON.stringify(question);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.put<TestQuestion>(this.baseUrl + unitId + '/question/test/' + questionId, body, {headers});
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

  editUnitDefinitionAnswer(unitID, questionID, answerID: number, answer: DefinitionAnswer) {
    const body = JSON.stringify(answer);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.put(this.baseUrl + unitID + '/question/definition/' + questionID + '/answer/' + answerID, body, {headers});
  }

  getUnitDefinitionAnswers(unitID, questionID: number) {
    return this.http.get(this.baseUrl + unitID + '/question/definition/' + questionID + '/answer');
  }

  getUnitDefinitionAnswersCorrected(unitID, questionID: number) {
    return this.http.get(this.baseUrl + unitID + '/question/definition/' + questionID + '/answer?corrected=true');
  }

  getUnitDefinitionAnswersNotCorrected(unitID, questionID: number) {
    return this.http.get(this.baseUrl + unitID + '/question/definition/' + questionID + '/answer?corrected=false');
  }

  getQuestionCorrectCount(unitId, questionId: number) {
    return this.http.get(this.baseUrl + unitId + '/question/' + questionId + '/correctCount');
  }

  getQuestionWrongCount(unitId, questionId: number) {
    return this.http.get(this.baseUrl + unitId + '/question/' + questionId + '/wrongCount');
  }

  getTestQuestionWrongAnswerCount(unitId, questionId: number) {
    return this.http.get(this.baseUrl + unitId + '/question/test/' + questionId + '/chosenWrongAnswersCount');
  }

  getListQuestionWrongAnswerCount(unitId, questionId: number) {
    return this.http.get(this.baseUrl + unitId + '/question/list/' + questionId + '/chosenWrongAnswersCount');
  }

  getUncorrectedDefinitionAnswers(unitId, questionId: number) {
    return this.http.get(this.baseUrl + unitId + '/question/definition/' + questionId + '/uncorrectedCount');
  }
}
