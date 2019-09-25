import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ItineraryService {
  constructor(private http: HttpClient) { }

  getItinerarys() {
    return this.http.get('/api/itinerarys/');
  }

  getItinerary(id: number) {
    return this.http.get('/api/itinerarys/' + id);
  }

}

