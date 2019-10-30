import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ListQuestion} from './listQuestion/listQuestion.model';

@Injectable()
export class QuestionService {
  constructor(private http: HttpClient) {
  }
  getQuestions() {
    return this.http.get('/api/question/');
  }
}
