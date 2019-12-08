import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ModuleService {
  constructor(private http: HttpClient) { }

  getModules() {
    return this.http.get('/api/lessons/');
  }

  getModule(id: number) {
    return this.http.get('/api/modules/' + id);
  }

}
