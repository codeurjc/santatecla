import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../auth/login.service';

@Injectable()
export class CourseService {
  constructor(private http: HttpClient) {}

  getCourse(id: number) {
    return this.http.get('/api/course/' + id);
  }

  addNewStudent(id: number, student: User) {
    const body = JSON.stringify(student);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<User>('/api/course/' + id + '/students/', body, {headers});
  }
}
