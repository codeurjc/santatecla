import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Course} from './course.model';

@Injectable()
export class NewCourseService {
  constructor(private http: HttpClient) {
  }

  postCourse(course: Course) {
    const body = JSON.stringify(course);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<Course>('/api/course/', body, {headers});
  }

  getUnits() {
    return this.http.get('/api/units/');
  }

  getUsers() {
    return this.http.get('api/student/');
  }

  searchUserByNameContaining(name: string) {
    return this.http.get('/api/student/search/' + name);
  }
}
