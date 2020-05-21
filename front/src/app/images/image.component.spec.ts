import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Observable, of} from 'rxjs';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {
  MatBottomSheetRef,
  MatCardModule, MatDialog, MatDialogModule, MatDialogRef,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatSnackBar,
  MatTableModule,
  MatTabsModule, MatTooltipModule,
  MatTreeModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {TreetableModule} from 'ng-material-treetable';
import {ImageComponent} from './image.component';
import {ClipboardService} from 'ngx-clipboard';
import {ImageService} from './image.service';
import {Image} from './image.model';
import {By} from '@angular/platform-browser';

describe('Image component', () => {

  let component: ImageComponent;
  let fixture: ComponentFixture<ImageComponent>;

  beforeEach(async(() => {

    class MockImageService extends ImageService {
      error = false;

      getImages(id: number) {
        if (id === 0) {
          this.error = true;
        }

        return Observable.create(observer => {
          if (this.error) {
            observer.error(new Error());
          } else {
            if (id === 1) {
              let image1: Image = {id: 1, name: 'Image 1', image: ''};
              let image2: Image = {id: 2, name: 'Image 2', image: ''};
              observer.next([image1, image2]);
            } else if (id === 2) {
              let image2: Image = {id: 2, name: 'Image 2', image: ''};
              observer.next([image2]);
            }
          }
          observer.complete();
        });
      }

      deleteImage(unitId: number, imageId: number) {
        return Observable.create(observer => {
          if (this.error) {
            observer.error(new Error());
          } else {
            observer.next();
          }
          observer.complete();
        });
      }

      addImage(imageFile: any, unitId: number) {
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
        MatTooltipModule,
        MatDialogModule,
      ],
      providers: [MatSnackBar, ClipboardService, MatDialog,
        {provide: ImageService, useClass: MockImageService},
        {provide: MatDialogRef, useValue: {}},
        {provide: MatBottomSheetRef, useValue: {}}],
      declarations: [ImageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageComponent);
    component = fixture.componentInstance;
    component.data = {unitId: 1};

    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeDefined();
    expect(component.images.length).toBe(2);
  });

  it('should search an image by the name', () => {
    fixture.detectChanges();

    fixture.debugElement.query(By.css('#image-name-search')).nativeElement.value = 'Image 1';
    const event = new KeyboardEvent('keypress', {key: 'Enter'});
    fixture.debugElement.query(By.css('#image-name-search')).nativeElement.dispatchEvent(event);

    component.applyFilterImages('Image 1');

    expect(component.imagesResult.length).toBe(1);
  });

  it('should delete an image', () => {
    spyOn(component.dialog, 'open')
      .and
      .returnValue({afterClosed: () => of(1)});

    component.data = {unitId: 2};
    component.deleteImage(1);

    expect(component.images.length).toBe(1);
  });

  it('should add an image', () => {
    fixture.debugElement.query(By.css('.image-input-btn')).triggerEventHandler('click', null);

    fixture.whenStable().then(() => {
      expect(component.saveImage).toHaveBeenCalled();
    });
  });
});
