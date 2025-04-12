import { Component, Input } from '@angular/core';
import { IIntro, ISocialUrls, IUserInfo } from '../../core/models/user-info.interface';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
})
export class IntroComponent {
  @Input() intro!: IIntro;
  @Input() socialUrls!: ISocialUrls;
  openDemo(url: string) {
    window.open(url, '_blank');
  }
  redirect(url: string) {
    window.open(url, '_blank'); // Opens the URL in a new tab
  }
}
