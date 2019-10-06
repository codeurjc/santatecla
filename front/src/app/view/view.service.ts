import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ViewService {

  baseUrl = '/api/units/';

  constructor(private http: HttpClient) {}

  getUnits() {
    return this.http.get(this.baseUrl);
  }

  getUnit(id: number) {
    return this.http.get(this.baseUrl + id);
  }

  searchByNameContaining(name: string) {
    return this.http.get(this.baseUrl + 'search/' + name);
  }

}
