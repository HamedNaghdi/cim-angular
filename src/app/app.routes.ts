import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then((m) => m.AdminModule),
    title: 'Dashboard | Cimdata',
    data: { preload: true },
  },
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
