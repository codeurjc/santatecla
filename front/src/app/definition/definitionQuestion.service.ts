import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DefinitionAnswer } from './definitionAnswer.model';

@Injectable()
export class DefinitionQuestionService {
  constructor(private http: HttpClient) {}

  getDefinitionQuestions() {
    return this.http.get('/api/definition/question/');
  }

  addDefinitionAnswer(id: number, answer: DefinitionAnswer):Observable<DefinitionAnswer>{
    const body = JSON.stringify(answer);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<DefinitionAnswer>('/api/definition/question/' + id, body, {headers});
  }

  getDefinitionAnswers(id: number) {
    return this.http.get('/api/definition/question/'+id);
  }

  getDefinitionQuestionsType1(){
    return this.http.get('/api/definition/question/type/1')
  }
}