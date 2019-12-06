import {MatDialogRef} from "@angular/material/dialog";
import {Component, Inject} from "@angular/core";

@Component({
  templateUrl: 'card-confirm.component.html',
  styleUrls: ['./card-confirm.component.css']
})

export class CardConfirmComponent {

  constructor(public dialogRef: MatDialogRef<CardConfirmComponent>) {}

  onNoClick() {
    this.dialogRef.close();
  }

  discardChanges() {
    this.dialogRef.close(1);
  }

  saveChanges() {
    this.dialogRef.close(2);
  }

}
