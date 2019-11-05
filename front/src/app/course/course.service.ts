import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CourseService {
  constructor(private http: HttpClient) {}

  getUserCourses(id: number) {
    return this.http.get('/api/course/user/' + id);
  }

  getCourse(id: number) {
    return this.http.get('api/course/' + id);
  }
}
