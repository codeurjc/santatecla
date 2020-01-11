import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MyCoursesService {
  constructor(private http: HttpClient) {}

  getUserCourses(id: number) {
    return this.http.get('/api/course/user/' + id);
  }

  getTeacherCourses(id: number) {
    return this.http.get('/api/course/teacher/' + id);
  }

  deleteCourse(id: number) {
    return this.http.delete('api/course/' + id);
  }

  searchByNameContaining(name: string) {
    return this.http.get('api/course/search/' + name);
  }
}
