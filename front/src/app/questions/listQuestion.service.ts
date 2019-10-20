import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { ListQuestion } from './listQuestion.model';
import { Observable } from 'rxjs';

@Injectable()
export class ListQuestionService {
  constructor(private http: HttpClient) {}

  getListQuestions() {
    return this.http.get('/api/definitionList/');
  }

  getListQuestion(id:number){
    return this.http.get('api/definitionList/'+id);
  }

  addListCorrection(id: number, correct: boolean):Observable<ListQuestion>{
    if(correct){
      const body = JSON.stringify(correct);

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });

      return this.http.post<ListQuestion>('/api/definitionList/' + id + '/correct/', body, {headers});
    }
    
    else{
      const body = JSON.stringify(correct);

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });

      return this.http.post<ListQuestion>('/api/definitionList/' + id + '/wrong/', body, {headers});
    }
  }
}