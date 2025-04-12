import { Component, Input } from '@angular/core';
import { IUserInfo } from '../../core/models/user-info.interface';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  @Input() about!: IUserInfo;
}
