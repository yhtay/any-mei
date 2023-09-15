import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  userList!: any;
  products: any = [
    {
      code: 'asdfas',
      name: 'asdfadsf',
      category: 'asdfadsf',
      quantity: 34,
    },
  ];

  constructor(private readonly userService: UserService) {
    // Because at this point getUsers isn't returning an observable
    this.userService.getUsers();
    this.userService.userList$.subscribe((data: any) => {
      this.userList = data;
    });
  }

  onCreate() {}

  onUpdate() {}

  onDelete() {}
}
