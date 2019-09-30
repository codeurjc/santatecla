import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Slide } from './slide.model';
import { Observable } from 'rxjs';

@Injectable()
export class SlideService {

  constructor(private http: HttpClient) {}

  getSlides() {
    return this.http.get('/api/slides/');
  }

  getSlide(id: number) {
    return this.http.get('/api/slides/' + id);
  }

  deleteSlide(slide: Slide): Observable<Slide> {
    return this.http.delete<Slide>('/api/slides/' + slide.id);
  }

  removeCard(slide: Slide, cardId: number) {
    return this.http.delete('/api/slides/' + slide.id + '/card/' + cardId);
  }


}
