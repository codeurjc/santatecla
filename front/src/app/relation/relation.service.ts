import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Relation } from "./relation.model";

@Injectable()
export class RelationService {

  baseUrl = '/api/relations/';

  constructor(private http: HttpClient) {}

  saveRelation(relation: Relation) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.put<Relation>(this.baseUrl, relation, { headers });
  }

}
