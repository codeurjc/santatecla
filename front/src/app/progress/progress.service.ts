import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class ProgressService {
  constructor(private http: HttpClient) {}

  getTeacherCourses(id: number) {
    return this.http.get('api/course/teacher/' + id);
  }

  getModuleProgress(courseId: number) {
    return this.http.get('api/course/' + courseId + '/module/progress');
  }

  getClassProgress(courseId: number) {
    return this.http.get('api/course/' + courseId + '/students/progress');
  }

  getModuleFormat(courseId: number) {
    return this.http.get('api/course/' + courseId + '/module/format');
  }

  getBestStudent(courseId: number) {
    return this.http.get('api/course/' + courseId + '/user/best');
  }

  getWorstStudent(courseId: number) {
    return this.http.get('api/course/' + courseId + '/user/worst');
  }

  getUnitProgress(courseId: number) {
    return this.http.get('api/course/' + courseId + '/units/points');
  }
}
