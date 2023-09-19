import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  computed,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { NotificationService } from './notification.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule, ToastModule, ButtonModule],
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  providers: [MessageService],
})
export class NotificationComponent implements OnInit, OnDestroy {
  private _messageService = inject(MessageService);
  public notiData: any = computed(() => {
    this.showToast(this.notiService.notiDataSignal()?.getNoti());
    return this.notiService.notiDataSignal();
  });
  public notiSubscription: Subscription | undefined;

  constructor(
    private readonly notiService: NotificationService,
    private readonly _cdr: ChangeDetectorRef
  ) {}
  
  ngOnInit(): void {
    this.notiSubscription = this.notiService.notiData$.subscribe(
      (data: any) => {
        if (data) {
          let { position, key, life, ...trimData } = data.data;
          this.showToast(trimData);
          this._cdr.detectChanges();
        }
      }
    );
  }

  /**
   * Process PrimeNG messageService to show a toast
   * @param {data} data Data of MCNoti
   */
  showToast(data: any) {
    this._messageService.add(data);
  }

  ngOnDestroy(): void {
    if (this.notiSubscription) {
      this.notiSubscription.unsubscribe();
    }
  }
}
