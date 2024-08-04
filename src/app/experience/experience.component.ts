import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IExperience } from '../../core/user-info.interface';
import { MatDialog } from '@angular/material/dialog';
import { ExperienceOverviewModalComponent } from '../experience-overview-modal/experience-overview-modal.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  @Input() experiences: IExperience[] = [];
  constructor(private dialog: MatDialog) {}

  viewDetails(exp: any) {
    this.dialog.open(ExperienceOverviewModalComponent, {
      data: exp,
    });
  }
}
