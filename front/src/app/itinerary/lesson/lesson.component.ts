import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../auth/login.service';
import {Lesson} from './lesson.model';
import {LessonService} from './lesson.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})

export class LessonComponent implements OnInit {

  lessons: Lesson[];

  constructor(private loginService: LoginService,
              private lessonService: LessonService) {
  }

  ngOnInit() {
    this.lessonService.getLessons().subscribe((data: Lesson[]) => {
      this.lessons = data;
    }, error => {console.log(error); });
  }

}
