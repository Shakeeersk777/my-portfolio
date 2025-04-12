import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IContactInfo } from '../../core/models/user-info.interface';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  @Input() contacts: IContactInfo[] = [];
  redirect(url: string) {
    window.open(url, '_blank'); // Opens the URL in a new tab
  }
}
