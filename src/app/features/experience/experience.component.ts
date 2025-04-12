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
  experience = '';

  calculateExperience(joinedDate: string): string {
    const joined = new Date(joinedDate);

    const currentDate = new Date();
    let years = currentDate.getFullYear() - joined.getFullYear();
    let months = currentDate.getMonth() - joined.getMonth();

    // Adjust if the current month is before the joining month
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    // Format the result as "X years and Y months"
    const yearsStr = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : '';
    const monthsStr =
      months > 0 ? `${months} month${months > 1 ? 's' : ''}` : '';

    if (yearsStr && monthsStr) {
      return `${yearsStr} and ${monthsStr}`;
    }

    return yearsStr || monthsStr || '0 months';
  }
}
