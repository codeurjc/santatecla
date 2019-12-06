import {MatDialogRef} from "@angular/material/dialog";
import {Component, Inject} from "@angular/core";

@Component({
  templateUrl: 'view-confirm.component.html',
  styleUrls: ['./view-confirm.component.css']
})

export class ViewConfirmComponent {

  constructor(public dialogRef: MatDialogRef<ViewConfirmComponent>) {}

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
