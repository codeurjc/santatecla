import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {
  MatBottomSheet,
  MatChipsModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatTooltipModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CardComponent} from './card.component';
import {CardService} from './card.service';
import {UnitService} from '../unit/unit.service';
import {Observable, from} from 'rxjs';
import {Unit} from '../unit/unit.model';
import {Card} from './card.model';
import {ActivatedRoute} from '@angular/router';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ImageService} from '../images/image.service';

describe('Card component', () => {

  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
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
            let card1: Card = {name: 'Test Card 1', content: 'Content for card 1'};
            let card2: Card = {name: 'Test Card 2', content: 'Content for card 2'};
            let unit: Unit = {name: 'Test Unit', cards: [card1, card2]};
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
        DragDropModule,
        MatExpansionModule,
        MatChipsModule
      ],
      providers: [CardService, ImageService, MatBottomSheet,
        {provide: ActivatedRoute, useValue: {
            params: from([{unitId: 1}]),
          }},
        {provide: UnitService, useClass: MockUnitService}],
      declarations: [
        CardComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;

    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should have 2 cards', () => {
    expect(component.unitId).toBe(1);
    expect(component.unit).not.toBeNull();
    expect(component.cards.length).toBe(2);
  });
});
