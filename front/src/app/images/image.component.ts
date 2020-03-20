import {Component, Inject, OnInit, Optional} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Image} from './image.model';
import {ImageService} from './image.service';
import { ClipboardService } from 'ngx-clipboard';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})

export class ImageComponent implements OnInit {

  images: Image[];
  imagesResult: Image[];

  newImage: Image;

  unitId: number;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private imageService: ImageService,
              private bottomSheetRef: MatBottomSheetRef<ImageComponent>,
              private clipboardService: ClipboardService,
              private snackBar: MatSnackBar,
              @Optional() @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { }

  ngOnInit() {
    this.unitId = this.data.unitId;
    this.imageService.getImages(this.unitId).subscribe((data: Image[]) => {
      this.images = [];
      this.imagesResult = [];
      data.forEach((image: Image) => {
        this.images.push({
          id: image['id'],
          name: image['name'],
          image: (image['image']) ? this.convertImage(image['image']) : ''
        });
      });
      this.imagesResult = this.images;
    });
  }

  convertImage(bytes: any) {
      return 'data:image/png;base64,' + btoa(new Uint8Array(bytes).reduce((data, byte) =>
        data + String.fromCharCode(byte),
        ''));
  }

  saveImage(fileInput: any) {
    const imageFile: File = fileInput.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {
      this.imageService.addImage(imageFile, this.unitId).subscribe(
        _ => {
          this.ngOnInit();
        }, (error: Error) => {
          console.error('Error creating new image: ' + error);
        }
      );
    });
    reader.readAsDataURL(imageFile);
  }

  applyFilterImages(value: string) {
    this.imagesResult = [];
    for (let result of this.images) {
      if (result.name.toLowerCase().includes(value.toLowerCase())) {
        this.imagesResult.push(result);
      }
    }
  }

  getUrl(id: any) {
    const text = 'insert.image/' + this.unitId + '/' + id;
    this.clipboardService.copyFromContent(text);
    this.data = text;
    this.bottomSheetRef.dismiss(this.data);
    this.snackBar.open('La imagen ha sido copiada al portapapeles', 'Entendido', {
      duration: 2000,
    });
    event.preventDefault();
  }

}
