import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Itineray } from './itinerary.model';

@Injectable()
export class ItineraryService {
  constructor(private http: HttpClient) { }

  getItinerary(id: number) {
    return this.http.get('/api/itineraries/' + id);
  }

  updateItinerary(itinerary: Itineray): Observable<Itineray> {
    const body = JSON.stringify(itinerary);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.put<Itineray>('/api/itineraries/' + itinerary.id , body, {headers});
  }

  addItinerary(itinerary: Itineray, id: number) {
    const body = JSON.stringify(itinerary);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<Itineray>('/api/units/' + id + '/itineraries', body, {headers});
  }

  deleteItinerary(itinerary: Itineray): Observable<Itineray> {
    return this.http.delete<Itineray>('/api/itineraries/' + itinerary.id);
  }

  removeSlide(itinerary: Itineray, id: number) {
    return this.http.delete('/api/itineraries/' + itinerary.id + '/slide/' + id);
  }

}
