import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {
  const statusPass = localStorage.getItem('authInfo');
  const router: Router = inject(Router);

  if (statusPass) {
    const status = JSON.parse(statusPass);

    if (status.isLoggedIn) {
      return true;
    }
  }

  // Can redirect to error-page | when tried to access by browser on guard
  return router.navigate(['**']);
};
