import { ChangeDetectorRef, Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule, ToastModule, ButtonModule],
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  providers: [MessageService],
})
export class NotificationComponent {
  private _messageService = inject(MessageService);
  public notiData: any = computed(() => {
    this.showToast(this.notiService.notiDataSignal()?.getNoti());
    return this.notiService.notiDataSignal();
  });

  constructor(
    private readonly notiService: NotificationService,
    private readonly _cdr: ChangeDetectorRef
  ) {}

  /**
   * Process PrimeNG messageService to show a toast
   * @param {data} data Data of MCNoti
   */
  showToast(data: any) {
    let { position, ...trimData } = data;
    this._messageService.add(trimData);
  }
}
