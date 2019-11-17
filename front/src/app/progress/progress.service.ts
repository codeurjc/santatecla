import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class ProgressService {
  constructor(private http: HttpClient) {}

  getTeacherCourses(id: number) {
    return this.http.get('api/course/teacher/' + id);
  }

  getClassProgress(courseId: number) {
    return this.http.get('api/course/' + courseId + '/class/points');
  }

  getBestStudent(courseId: number) {
    return this.http.get('api/course/' + courseId + '/user/best');
  }

  getWorstStudent(courseId: number) {
    return this.http.get('api/course/' + courseId + '/user/worst');
  }
}
