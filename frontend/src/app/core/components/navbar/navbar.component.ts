import { Component, OnInit, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public isLoggedIn = computed(() => this.authService.loginSignal());

  constructor(
    private readonly _router: Router,
    private readonly authService: AuthService
  ) {
  }

  // Redirect to login page from Navbar
  login() {
    this._router.navigate(['auth/login']);
  }

  // Redirect to default route from Navbar
  logout() {
    this.authService.logout();
    this._router.navigate(['/']);
  }
}
