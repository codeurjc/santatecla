import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Unit } from '../unit/unit.model';

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

  saveUnit(data) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.put<Unit>(this.baseUrl, data, { headers });
  }

}
