import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OverviewDialogComponent } from '../overview-dialog/overview-dialog.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() cardId = '';
  @Input() cardTitle = '';
  @Input() items: any[] = [];
  constructor(private matDialog: MatDialog) {}

  openModal(items: any) {
    this.matDialog.open(OverviewDialogComponent, { data: items });
  }
}
