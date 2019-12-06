import {MatDialogRef} from "@angular/material/dialog";
import {Component, Inject} from "@angular/core";

@Component({
  templateUrl: 'view-changes.component.html',
  styleUrls: ['./view-changes.component.css']
})

export class ViewChangesComponent {

  constructor(public dialogRef: MatDialogRef<ViewChangesComponent>) {}

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
