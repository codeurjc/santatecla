import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ViewService {

  constructor(private http: HttpClient) {}

  getUnits() {
    return this.http.get('/api/units/');
  }

}
