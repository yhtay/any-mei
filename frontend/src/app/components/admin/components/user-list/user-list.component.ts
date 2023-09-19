import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { NotificationService } from 'src/external/notification/notification.service';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, InputTextModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  userList!: any;

  constructor(
    private readonly userService: UserService,
    private readonly notiService: NotificationService,
    private readonly _router: Router
  ) {
    // Because at this point getUsers isn't returning an observable
    this.userService.getUsers();
    this.userService.userList$.subscribe((data: any) => {
      this.userList = data;
    });
  }

  onFilterInputChange(event: any) {
    return event.value;
  }

  onCreate() {
    this._router.navigate(['admin/userdetail']);
  }

  onUpdate(userId: string) {
    this._router.navigate([`admin/userdetail/${userId}`]);
  }

  // Add a confirmation to make it more secure
  onDelete(userId: string) {
    this.userService.deleteUser(userId);
    this.notiService.showSuccess(
      `Deleted User: ${userId}`,
      'The user data has been removed from the database...'
    );
  }
}
