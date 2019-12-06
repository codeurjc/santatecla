import { Card } from './card.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CardService {

  constructor(private http: HttpClient) {}

  deleteCard(unitId: number, cardId: number) {
    return this.http.delete('/api/units/' + unitId + '/cards/' + cardId);
  }

  save(unitId: number, card: Card) {
    const body = JSON.stringify(card);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.put<Card>('/api/units/' + unitId + '/cards/' + card.id, body, { headers });
  }

}
