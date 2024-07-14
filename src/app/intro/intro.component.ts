import { Component, Input } from '@angular/core';
import { IUserInfo } from '../../core/user-info.interface';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
})
export class IntroComponent {
  @Input() intro!: IUserInfo;
  openDemo(url: string) {
    window.open(url, '_blank');
  }
  redirect(url: string) {
    window.open(url, '_blank'); // Opens the URL in a new tab
  }
}
