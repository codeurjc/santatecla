import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ItineraryService {
  constructor(private http: HttpClient) { }

  getItineraries() {
    return this.http.get('/api/itineraries/');
  }

  getItinerary(id: number) {
    return this.http.get('/api/itineraries/' + id);
  }

}

