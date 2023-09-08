import { Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject } from 'rxjs';
import { MNoti } from './notification.model';

@Injectable({
  providedIn: 'platform',
})
export class NotificationService {
  // Create an observable that will change the state of the notification and alert on bases whenever its called
  private notiData: MNoti = new MNoti();
  private bsNotiData$ = new BehaviorSubject<MNoti | null>(this.notiData);
  public notiData$ = this.bsNotiData$.asObservable();

  public notiDataSignal = toSignal(this.bsNotiData$);

  get noti() {
    return this.notiData.getNoti()
  }

  showNotification() {
    this.bsNotiData$.next(this.notiData);
  }

  updateNotification(severity: string, summary: string, detail: string) {
    let msg = { severity: severity, summary: summary, detail: detail };
    this.notiData.updateNoti(msg);
    this.showNotification();
  }

  updatePosition(position: string, key: string) {
    let updateNoti = { position: position, key: key };
    this.notiData.updatePosition(updateNoti);
    this.showNotification();
  }

  showSuccess(summary?: string, detail?: string) {
    this.updateNotification('success', summary || '', detail || '');
  }

  showInfo(summary?: string, detail?: string) {
    this.updateNotification('info', summary || '', detail || '');
  }

  showWarn(summary?: string, detail?: string) {
    this.updateNotification('warn', summary || '', detail || '');
  }

  showError(summary?: string, detail?: string) {
    this.updateNotification('error', summary || '', detail || '');
  }
}
