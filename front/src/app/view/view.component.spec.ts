import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {Observable} from "rxjs";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MenuComponent} from "../menu/menu.component";
import {AppComponent} from "../app.component";
import {UnitService} from "../unit/unit.service";
import {Unit} from "../unit/unit.model";
import {ViewComponent} from "./view.component";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";
import {LoginComponent} from "../login/login.component";
import {TdDialogService} from "@covalent/core";
import {FocusedUnitsService} from "./focused-units.service";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {LoginService} from "../auth/login.service";
import {RouterTestingModule} from "@angular/router/testing";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatButtonModule} from "@angular/material/button";
import {ConfirmActionComponent} from '../confirmAction/confirm-action.component';
import {BrowserDynamicTestingModule} from "@angular/platform-browser-dynamic/testing";
import {By} from "@angular/platform-browser";

describe('View component', () => {

  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;

  beforeEach(async(() => {

    class MockUnitService extends UnitService {
      error = false;

      validName(unit: Unit) {
        return Observable.create(observer => {
          if (this.error) {
            observer.error(new Error());
          } else {
            observer.next(unit);
          }
          observer.complete();
        });
      }

      searchByNameContaining(name: string) {
        return Observable.create(observer => {
          if (this.error) {
            observer.error(new Error());
          } else {
            observer.next([]);
          }
          observer.complete();
        });
      }

      createUnit(unit: Unit) {
        return Observable.create(observer => {
          if (this.error) {
            observer.error(new Error());
          } else {
            observer.next(unit);
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
        MatTooltipModule,
        MatDialogModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatCheckboxModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatSelectModule
      ],
      providers: [
        LoginService,
        FocusedUnitsService,
        TdDialogService,
        {provide: UnitService, useClass: MockUnitService}
      ],
      declarations: [
        LoginComponent,
        ViewComponent,
        MenuComponent,
        AppComponent,
        ConfirmActionComponent
      ]
    }).overrideModule(BrowserDynamicTestingModule, { set: { entryComponents: [ConfirmActionComponent] }
    }).compileComponents();

    fixture = TestBed.createComponent(ViewComponent);
    component = fixture.componentInstance;

    component.ngOnInit();
    component.ngAfterContentInit();

  }));

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should create a separate unit', () => {
    fixture.debugElement.query(By.css('.new-unit-button')).triggerEventHandler('click', null);
    expect(component.units.size).toBe(1);
    expect(component.changed).toBe(true);
  });

  it('should create two units with the same name and cant save because of conflict', () => {
    fixture.debugElement.query(By.css('.new-unit-button')).triggerEventHandler('click', null);
    fixture.debugElement.query(By.css('.new-unit-button')).triggerEventHandler('click', null);
    expect(component.units.size).toBe(2);
    expect(component.changed).toBe(true);
    expect(component.ableToSave).toBe(false);
  });

});
