import { Card } from './card.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CardService {

  constructor(private http: HttpClient) {}

  getCards(unitId: number) {
    return this.http.get('/api/units/' + unitId + '/cards');
  }

  getCard(unitId: number, cardId: number) {
    return this.http.get('/api/units/' + unitId + '/cards/' + cardId);
  }

  save(unitId: number, card: Card) {
    const body = JSON.stringify(card);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.put<Card>('/api/units/' + unitId + '/cards/' + card.id, body, { headers });
  }

  putImage(unitId: number, cardId: number, image: any) {
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post('/api/units/' + unitId + '/cards/' + cardId + '/image', formData);
  }

}
