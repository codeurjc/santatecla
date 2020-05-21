import {ClassProgressComponent} from '../class-progress/class-progress.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LoginService} from '../../auth/login.service';
import {CourseService} from '../../course/course.service';
import {from, Observable} from 'rxjs';
import {Course} from '../../course/course.model';
import {ProgressService} from '../progress.service';
import {StudentProgressItem} from '../items/studentProgressItem.model';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {
  MatCardModule, MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatTableModule,
  MatTabsModule, MatTooltipModule,
  MatTreeModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {TreetableModule} from 'ng-material-treetable';
import {ActivatedRoute} from '@angular/router';
import {By} from '@angular/platform-browser';
import {ModuleProgressComponent} from './module-progress.component';
import {ProgressNode} from '../items/progressNode.model';

describe('Module Progress component', () => {

  let component: ModuleProgressComponent;
  let fixture: ComponentFixture<ModuleProgressComponent>;

  beforeEach(async(() => {
    class MockLoginService extends LoginService {
      isAdmin = true;
    }

    class MockCourseService extends CourseService {
      error = false;

      getCourse(id: number) {
        if (id !== 1) {
          this.error = true;
        }

        return Observable.create(observer => {
          if (this.error) {
            observer.error(new Error());
          } else {
            let course1: Course = {
              id: 1,
              name: 'Test Course 1',
              description: 'Test Course 1 Description',
              module: {name: 'Test Module', blocks: []}
            };
            observer.next(course1);
          }
          observer.complete();
        });
      }
    }

    class MockProgressService extends ProgressService {
      error = false;

      getModuleProgress(courseId: number) {
        if (courseId !== 1) {
          this.error = true;
        }

        return Observable.create(observer => {
          if (this.error) {
            observer.error(new Error());
          } else {
            let item1: ProgressNode = {value: {nombre: 'Test Module 1', media: 10, realizacion: 10}, children: []};
            let item2: ProgressNode = {value: {nombre: 'Test Module 2', media: 10, realizacion: 10}, children: [item1]};
            observer.next(item2);
          }
          observer.complete();
        });
      }
    }


    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatTreeModule,
        MatCardModule,
        MatTabsModule,
        NgxChartsModule,
        TreetableModule,
        MatTableModule,
        MatTooltipModule,
        MatDialogModule
      ],
      providers: [
        {
          provide: ActivatedRoute, useValue: {
            params: from([{courseId: 1}])
          }
        },
        {provide: LoginService, useClass: MockLoginService},
        {provide: CourseService, useClass: MockCourseService},
        {provide: ProgressService, useClass: MockProgressService}],
      declarations: [ModuleProgressComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleProgressComponent);
    component = fixture.componentInstance;

    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeDefined();
    expect(component.moduleResults).not.toBeNull();
  });

  it('should show the diagram', () => {
    expect(component.histogram.length).toBe(1);
  });
});
