import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { logListData } from 'src/app/fixtures/testLogData';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  private logList: any = [];
  private bsLogList$: any = new BehaviorSubject(null);
  public logList$ = this.bsLogList$.asObservable();

  // Data will still be stored inside Model -- Pagination is necessary otherwise overload

  constructor(private readonly _http: HttpClient) {}

  // Get all USER Data from Backend
  getUsers() {
    // GET REQUEST
    this.logList = logListData;
    this.bsLogList$.next(this.logList);
  }
}
