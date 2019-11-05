import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class StudentHomeService {
  constructor(private http: HttpClient) {}

  getUserCourses(id: number) {
    return this.http.get('/api/course/user/' + id);
  }
}
