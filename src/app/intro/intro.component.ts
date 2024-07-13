import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
})
export class IntroComponent {
  @Input() intro: any;
  openDemo(url: string) {
    window.open(url, '_blank');
  }
}
