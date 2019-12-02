import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Itineray} from '../itinerary.model';
import {UnitService} from '../../unit/unit.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {SubMenuComponent} from '../../subMenu/subMenu.component';

export interface DialogData {
  itinerary: Itineray;
}

@Component({
  templateUrl: './itineraryForm.component.html',
  styleUrls: ['./itineraryForm.component.css']
})

export class ItineraryFormComponent {

  constructor(public dialogRef: MatDialogRef<SubMenuComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
