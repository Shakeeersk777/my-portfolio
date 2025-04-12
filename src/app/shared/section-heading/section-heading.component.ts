import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  imports: [],
  templateUrl: './section-heading.component.html',
  styleUrl: './section-heading.component.scss'
})
export class SectionHeadingComponent {
  @Input() titleText: string = '';
  @Input() introText : string = '';
}
