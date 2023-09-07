import { Routes } from '@angular/router';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./home.component'),
  },
  {
    path: 'add-product',
    loadComponent: () => import('./form-product/form-product.component'),
  },
];
