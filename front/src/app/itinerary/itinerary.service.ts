import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Itineray } from './itinerary.model';

@Injectable()
export class ItineraryService {
  constructor(private http: HttpClient) { }

  getItineraries() {
    return this.http.get('/api/itineraries/');
  }

  getItinerary(id: number) {
    return this.http.get('/api/itineraries/' + id);
  }

  deleteItinerary(itinerary: Itineray): Observable<Itineray> {
    return this.http.delete<Itineray>('/api/itineraries/' + itinerary.id);
  }

  removeSlide(itinerary: Itineray, id: number) {
    return this.http.delete('/api/itineraries/' + itinerary.id + '/slide/' + id);
  }

  removeItinerary(itinerary: Itineray, id: number) {
    return this.http.delete('/api/itineraries/' + itinerary.id + '/itinerary/' + id);
  }

}
