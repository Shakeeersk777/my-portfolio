import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ICertification } from '../../core/user-info.interface';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss',
})
export class CertificationsComponent {
  @Input() certifications: ICertification[] = [];
}
