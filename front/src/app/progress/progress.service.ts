import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class ProgressService {
  constructor(private http: HttpClient) {}

  getUnit(id:number){
    return this.http.get('api/units/'+id);
  }
}