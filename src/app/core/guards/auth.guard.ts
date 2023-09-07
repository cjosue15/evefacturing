import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

export const routerInjection = () => inject(Router);

export const hasToken = () => inject(AuthService).getToken();

export const authGuard: CanActivateFn = () => {
  const router = routerInjection();

  if (!hasToken()) {
    router.navigateByUrl('auth/log-in');
    return false;
  }

  return true;
};

export const publicGuard: CanActivateFn = () => {
  const router = routerInjection();

  if (hasToken()) {
    router.navigateByUrl('/');
    return false;
  }

  return true;
};
