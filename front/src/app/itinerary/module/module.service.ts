import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Block} from '../block.model';

@Injectable()
export class ModuleService {
  constructor(private http: HttpClient) { }

  getModules() {
    return this.http.get('/api/modules/');
  }

  getModule(id: number) {
    return this.http.get('/api/modules/' + id);
  }

  addBlock(moduleId: number, block: Block) {
    const body = JSON.stringify(block);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<Block>('/api/modules/' + moduleId, body, { headers });
  }
}
