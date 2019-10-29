import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ListQuestion} from './listQuestion.model';
import {ListAnswer} from './listAnswer.model';

@Injectable()
export class ListQuestionService {
  constructor(private http: HttpClient) {
  }

  getListQuestions() {
    return this.http.get('/api/definitionList/');
  }

  getListQuestion(id: number) {
    return this.http.get('api/definitionList/' + id);
  }

  addListQuestion(listQuestion: ListQuestion) {
    console.log('TODO');
  }

  addAnswer(id: number, listAnswer: ListAnswer): Observable<ListQuestion> {
    const body = JSON.stringify(listAnswer);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<ListQuestion>('api/definitionList/' + id + '/answer', body, {headers});
  }

  getUserAnswers(questionId: number, userId: number) {
    return this.http.get('api/definitionList/' + questionId + '/answer/user/' + userId);
  }
}
