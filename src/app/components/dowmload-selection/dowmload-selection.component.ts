import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dowmload-selection',
  templateUrl: './dowmload-selection.component.html',
  styleUrls: ['./dowmload-selection.component.css']
})
export class DowmloadSelectionComponent {
  selectedFormat: string | null = null;

  constructor(private dialogRef: MatDialogRef<DowmloadSelectionComponent>) {}

  onCancel() {
    this.dialogRef.close(null);
  }

  onDownload() {
    this.dialogRef.close(this.selectedFormat);
  }

}
