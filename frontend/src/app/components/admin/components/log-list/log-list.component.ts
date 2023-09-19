import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { NotificationService } from 'src/external/notification/notification.service';
import { Router } from '@angular/router';
import { LogService } from '../../services/log.service';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-log-list',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, InputTextModule],
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.scss'],
})
export class LogListComponent {
  logList!: any;

  constructor(
    private readonly logService: LogService,
    private readonly notiService: NotificationService,
    private readonly _router: Router
  ) {
    // Because at this point getUsers isn't returning an observable
    this.logService.getUsers();
    this.logService.logList$.subscribe((data: any) => {
      this.logList = data;
    });
  }

  onFilterInputChange(event: any) {
    return event.value;
  }
}
