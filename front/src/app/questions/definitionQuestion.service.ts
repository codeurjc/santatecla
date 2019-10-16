import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DefinitionAnswer } from './definitionAnswer.model';

@Injectable()
export class DefinitionQuestionService {
  constructor(private http: HttpClient) {}

  getDefinitionQuestion(id:number){
    return this.http.get('api/definition/question/'+id);
  }

  addDefinitionAnswer(id: number, answer: DefinitionAnswer):Observable<DefinitionAnswer>{
    const body = JSON.stringify(answer);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<DefinitionAnswer>('/api/definition/question/' + id, body, {headers});
  }

  addDefinitionCorrection(id: number, correct: boolean):Observable<DefinitionAnswer>{
    if(correct){
      const body = JSON.stringify(correct);

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });

      return this.http.post<DefinitionAnswer>('/api/definition/question/' + id + '/correct/', body, {headers});
    }
    
    else{
      const body = JSON.stringify(correct);

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });

      return this.http.post<DefinitionAnswer>('/api/definition/question/' + id + '/wrong/', body, {headers});
    }
  }
}