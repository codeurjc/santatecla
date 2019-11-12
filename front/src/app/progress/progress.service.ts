import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class ProgressService {
  constructor(private http: HttpClient) {}

  getTeacherCourses(id: number) {
    return this.http.get('api/course/teacher/' + id);
  }
}
