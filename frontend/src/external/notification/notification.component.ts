import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  computed,
  effect,
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
export class NotificationComponent implements OnDestroy, OnInit {
  private _messageService = inject(MessageService);
  private _notiSub!: Subscription;
  public notiData: any = computed(() => {
    this.showToast(this.notiService.notiDataSignal()?.getNoti())
    return this.notiService.notiDataSignal()
  });

  constructor(
    private readonly notiService: NotificationService,
    private readonly _cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // this.notiService.notiData$.subscribe((data) => {
    //   if (data) {
    //     this.showToast(data.getNoti());
    //     console.log(data);
    //     console.log(this.notiData().data);
    //   }
    // });

    setTimeout(() => {
      // this.notiService.updatePosition('top-center', 'tc');
      this.notiService.showError('Error');
      console.log('Ran oninit', this.notiData().data);
    }, 5000);
  }

  showToast(msg: any) {
    let { position, ...data } = msg;
    console.log(data)
    this._messageService.add(data);
  }

  ngOnDestroy() {}
}
