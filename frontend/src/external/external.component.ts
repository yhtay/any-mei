import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';

@Component({
  selector: 'app-external',
  standalone: true,
  imports: [CommonModule, NotificationComponent],
  templateUrl: './external.component.html',
  styleUrls: ['./external.component.scss'],
})
export class ExternalComponent {}
