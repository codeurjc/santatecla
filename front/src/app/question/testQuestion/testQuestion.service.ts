import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TestAnswer} from './testAnswer.model';

@Injectable()
export class TestQuestionService {
  constructor(private http: HttpClient) {
  }

  getTestQuestion(id: number) {
    return this.http.get('api/test/' + id);
  }

  addTestAnswer(id: number, answer: TestAnswer): Observable<TestAnswer> {
    const body = JSON.stringify(answer);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<TestAnswer>('/api/test/' + id, body, {headers});
  }

  getUserAnswers(questionId: number, userId: number) {
    return this.http.get('api/test/' + questionId + '/answer/user/' + userId);
  }
}
