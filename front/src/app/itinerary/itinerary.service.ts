import { Slide } from './../slide/slide.model';
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

  getItinerarySumm(id: number) {
    return this.http.get('/api/itineraries/' + id + '/summarized');
  }

  addItinerary(itinerary: Itineray, id: number) {
    const body = JSON.stringify(itinerary);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<Itineray>('/api/units/' + id + '/itineraries', body, {headers});
  }

  addTheorySlide(slide: Slide, id: number) {
    const body = JSON.stringify(slide);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<Itineray>('/api/itineraries/' + id + '/theorySlide', body, {headers});
  }

  addPracticeSlide(slide: Slide, id: number) {
    const body = JSON.stringify(slide);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<Itineray>('/api/itineraries/' + id + '/practiceSlide', body, {headers});
  }

  addItineraryToItinerary(itineraryId: number, newItineraryId: number): Observable<Slide> {
    return this.http.post<Slide>('/api/itineraries/' + itineraryId + '/itinerary/' + newItineraryId, null);
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
