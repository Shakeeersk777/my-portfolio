import { Component, Input } from '@angular/core';
import { IUserInfo } from '../../core/user-info.interface';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  @Input() about!: IUserInfo;
}
