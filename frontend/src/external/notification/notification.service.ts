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

  // Returns Noti Data from the model
  get noti() {
    return this.notiData.getNoti();
  }

  // Update the new data to BehaviorSubject
  showNotification() {
    this.bsNotiData$.next(this.notiData);
  }

  // Two update function cannot be run at the same scope
  /**
   * Updates the data to the Model and the BehaviorSubject
   * @param {severity} severity Types: 'success' | 'info' | 'error' | 'warn'
   * @param {summary} summary Summary of the Notification
   * @param {detail} detail Detail Information About the Notification
   */
  updateNotification(severity: string, summary: string, detail: string) {
    let msg = { severity: severity, summary: summary, detail: detail };
    this.notiData.updateNoti(msg);
    this.showNotification();
  }

  /**
   * Updates the position placement of the toast -- position and key works as a pair
   * variables = top | bottom | center
   * possibles_placement = right | left | center
   *
   * Example: top-right
   *
   * For key -- it is the initial of the position name
   * @param {position} position A string of placement
   * @param {key} key The initial of position
   */
  updatePosition(position: string, key: string) {
    let updateNoti = { position: position, key: key };
    this.notiData.updateNoti(updateNoti);
    this.showNotification();
  }

  // Shortcut for Toast Type Success
  showSuccess(summary?: string, detail?: string) {
    this.updateNotification('success', summary || '', detail || '');
  }

  // Shortcut for Toast Type Info
  showInfo(summary?: string, detail?: string) {
    this.updateNotification('info', summary || '', detail || '');
  }

  // Shortcut for Toast Type Warn
  showWarn(summary?: string, detail?: string) {
    this.updateNotification('warn', summary || '', detail || '');
  }

  // Shortcut for Toast Type Error
  showError(summary?: string, detail?: string) {
    this.updateNotification('error', summary || '', detail || '');
  }
}
