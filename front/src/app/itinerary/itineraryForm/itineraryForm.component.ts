import {Component, Inject, OnInit} from '@angular/core';
import {Itineray} from '../itinerary.model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UnitComponent} from "../../unit/unit.component";

export interface DialogData {
  itinerary: Itineray;
}

@Component({
  templateUrl: './itineraryForm.component.html',
  styleUrls: ['./itineraryForm.component.css']
})

export class ItineraryFormComponent {

  constructor(
    public dialogRef: MatDialogRef<UnitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
