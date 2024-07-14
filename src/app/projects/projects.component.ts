import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IProject } from '../../core/user-info.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  @Input() projects: IProject[] = [];

  openGithub(url: string) {
    window.open(url, '_blank');
  }
}
