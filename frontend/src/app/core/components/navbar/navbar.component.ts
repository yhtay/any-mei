import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  // Connect this is Service -- create both login and logout in the service as well
  public isLoggedIn = false;

  constructor(private readonly _router: Router) {}

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this._router.navigate(['/']);
    this.isLoggedIn = false;
  }
}
