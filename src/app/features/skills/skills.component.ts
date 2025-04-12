import { Component, Input } from '@angular/core';
import { ISkills } from '../../core/models/user-info.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  @Input() skills: ISkills[] = [];
}
