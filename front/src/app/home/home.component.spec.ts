import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LoginService} from '../auth/login.service';
import {RouterTestingModule} from '@angular/router/testing';
import {
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home.component';

describe('Home component', () => {

  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    class MockLoginService extends LoginService {
      isAdmin = true;
    }

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatIconModule,
        MatFormFieldModule,
        HttpClientModule,
        MatCardModule,
      ],
      providers: [
        {provide: LoginService, useClass: MockLoginService}],
      declarations: [HomeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
