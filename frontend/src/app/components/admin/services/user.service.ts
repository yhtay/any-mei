import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { userListData } from 'src/app/fixtures/testUserData';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userList: any = [];
  private bsUserList$: any = new BehaviorSubject(null);
  public userList$ = this.bsUserList$.asObservable();

  // Data will still be stored inside Model -- Pagination is necessary otherwise overload

  constructor(private readonly _http: HttpClient) {}

  // Get all USER Data from Backend
  getUsers() {
    // GET REQUEST
    this.userList = userListData;
    this.bsUserList$.next(this.userList);
  }

  // Create a USER Data
  createUser(user: any) {
    this.userList.push(user);
    this.bsUserList$.next(this.userList);
  }

  // Update a USER Data
  updateUser(userData: any) {
    this.userList = this.userList.map((user: any) => {
      if (user.id === userData.id) {
        return { ...user, ...userData };
      } else {
        return user;
      }
    });
  }

  // Delete a USER Data
  deleteUser(userId: any) {
    this.userList = this.userList.filter((user: any) => user.id !== userId);
    this.bsUserList$.next(this.userList);
  }
}
