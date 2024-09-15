import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
    // title: 'Home | Cimdata',
    data: { preload: true },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
