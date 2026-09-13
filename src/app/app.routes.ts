import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
    pathMatch: 'full',
  },
  {
    path: 'produtos',
    loadComponent: () => import('./pages/products/products').then(m => m.Products),
  },
  {
    path: 'cupons',
    loadComponent: () => import('./pages/coupons/coupons').then(m => m.Coupons),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
