import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
}
