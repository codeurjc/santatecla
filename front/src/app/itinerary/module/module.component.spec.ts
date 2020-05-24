import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {LoginService} from '../../auth/login.service';
import {UnitService} from '../../unit/unit.service';
import {from, Observable, of} from 'rxjs';
import {Unit} from '../../unit/unit.model';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {
  MatCardModule, MatDialog,
  MatDialogModule, MatDialogRef,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatMenuModule,
  MatTabsModule,
  MatTooltipModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ActivatedRoute} from '@angular/router';
import {By} from '@angular/platform-browser';
import {ModuleComponent} from './module.component';
import {Module} from './module.model';
import {ModuleService} from './module.service';
import {UnitModuleService} from './unit-module.service';

describe('Module component', () => {

  let component: ModuleComponent;
  let fixture: ComponentFixture<ModuleComponent>;

  beforeEach(async(() => {

    class MockLoginService extends LoginService {
      isAdmin = true;
    }

    class MockModuleService extends ModuleService {

    }

    class MockUnitService extends UnitService {
      error = false;

      getUnit(id: number) {
        if (id !== 1) {
          this.error = true;
        }

        return Observable.create(observer => {
          if (this.error) {
            observer.error(new Error());
          } else {
            let module1: Module = {name: 'Test Module 1', blocks: []};
            let module2: Module = {name: 'Test Module 2', blocks: []};
            let unit: Unit = {id: '1', name: 'Test Unit', modules: [module1, module2]};
            observer.next(unit);
          }
          observer.complete();
        });
      }
    }

    class MockUnitModuleService extends UnitModuleService {
      error = false;

      addModule(id: number, module: Module) {
        if (id !== 1) {
          this.error = true;
        }

        return Observable.create(observer => {
          if (this.error) {
            observer.error(new Error());
          } else {
            module = {id: 1, name: 'Test Module 3', blocks: []};
            observer.next(module);
          }
          observer.complete();
        });
      }

      deleteModule(unitId: number, moduleId: number) {
        if (unitId !== 1) {
          this.error = true;
        }

        return Observable.create(observer => {
          if (this.error) {
            observer.error(new Error());
          } else {
            observer.next();
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
        MatCardModule,
        MatTabsModule,
        MatTooltipModule,
        MatDialogModule,
        MatMenuModule
      ],
      providers: [MatDialog,
        {
          provide: ActivatedRoute, useValue: {
            params: from([{unitId: 1}])
          }
        },
        {provide: LoginService, useClass: MockLoginService},
        {provide: ModuleService, useClass: MockModuleService},
        {provide: UnitModuleService, useClass: MockUnitModuleService},
        {provide: UnitService, useClass: MockUnitService},
        {provide: MatDialogRef, useValue: {}}],
      declarations: [ModuleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleComponent);
    component = fixture.componentInstance;

    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeDefined();
    expect(component.modules.length).toBe(2);
  });

  it('should add a new Module', () => {
    let module: Module = {id: 1, name: 'Test Lesson 3', blocks: []};
    spyOn(component.dialog, 'open')
      .and
      .returnValue({afterClosed: () => of(module)});

    fixture.detectChanges();

    fixture.debugElement.query(By.css('.new-module-button')).triggerEventHandler('click', null);

    expect(component.newModule).toBe(module);
  });

  it('should delete a Module', () => {
    spyOn(component, 'ngOnInit');
    spyOn(component.dialog, 'open')
      .and
      .returnValue({afterClosed: () => of(1)});
    fixture.detectChanges();

    component.deleteModule(1);

    expect(component.ngOnInit).toHaveBeenCalled();
  });

  it('should search a module', () => {
    fixture.debugElement.query(By.css('#search-input')).nativeElement.value = 'Test Module 1';
    fixture.debugElement.query(By.css('#search-input')).triggerEventHandler('input', null);

    component.searchModule('Test Module 1');

    expect(component.modulesResult.length).toBe(1);
  });
});
