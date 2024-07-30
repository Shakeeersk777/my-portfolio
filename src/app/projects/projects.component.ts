import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IProject } from '../../core/user-info.interface';
import { MatDialog } from '@angular/material/dialog';
import { OverviewDialogComponent } from '../overview-dialog/overview-dialog.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  constructor(private matDialog: MatDialog) {}
  @Input() projects: IProject[] = [];

  openGithub(url: string) {
    window.open(url, '_blank');
  }

  openModal(project: IProject) {
    this.matDialog.open(OverviewDialogComponent, { data: project });
  }
}
