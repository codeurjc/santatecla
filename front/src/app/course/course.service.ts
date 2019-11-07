import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CourseService {
  constructor(private http: HttpClient) {}

  getCourse(id: number) {
    return this.http.get('/api/course/' + id);
  }

  getUserDistinctAnswerCount(unitId: number, userId: number) {
    return this.http.get('api/units/' + unitId + '/question/answer/' + userId + '/distinct');
  }

  getUserBestUnit(courseId: number, userId: number) {
    return this.http.get('api/course/' + courseId + '/user/' + userId + '/best');
  }

  getUserWorstUnit(courseId: number, userId: number) {
    return this.http.get('api/course/' + courseId + '/user/' + userId + '/worst');
  }
}
