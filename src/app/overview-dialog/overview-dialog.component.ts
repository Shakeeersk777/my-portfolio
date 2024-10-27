import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-overview-dialog',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './overview-dialog.component.html',
  styleUrl: './overview-dialog.component.scss',
})
export class OverviewDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<OverviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: any
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }

  onDownload(): void {}

  openLink(url: string): void {
    window.open(url, '_blank');
  }
}
