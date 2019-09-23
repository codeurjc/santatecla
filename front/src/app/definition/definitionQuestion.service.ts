import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DefinitionQuestionService {
  constructor(private http: HttpClient) {}

  getDefinitionQuestions() {
    return this.http.get('/api/definition/question/');
  }
}