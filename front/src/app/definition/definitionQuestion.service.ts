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

  addDefinitionAnswer(id: number, answer: DefinitionAnswer){
    return this.http.post<DefinitionAnswer>('/api/definition/question/' + id, null);
  }

  getDefinitionAnswers(id: number) {
    return this.http.get('/api/definition/question/'+id);
  }
}