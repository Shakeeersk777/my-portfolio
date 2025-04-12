import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IExperience } from '../../core/models/user-info.interface';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  @Input() experiences: IExperience[] = [];
}
