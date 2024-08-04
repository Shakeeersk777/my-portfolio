import { Component, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { IExperience } from '../../core/user-info.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience-overview-modal',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './experience-overview-modal.component.html',
  styleUrl: './experience-overview-modal.component.scss',
})
export class ExperienceOverviewModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ExperienceOverviewModalComponent>,
    @Inject(MAT_DIALOG_DATA) public experience: IExperience
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
