import { Routes } from '@angular/router';
import { authGuard, publicGuard } from '@core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    canActivate: [publicGuard],
    children: [
      {
        path: 'log-in',
        loadComponent: () => import('@pages/auth/login/login.component'),
      },
    ],
  },
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () => import('@core/components/layout/layout.component'),
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@pages/home/home.routes').then((r) => r.HOME_ROUTES),
      },
    ],
  },
];
