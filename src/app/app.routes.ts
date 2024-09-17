import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

export const routes: Routes = [
  // {
  //   path: 'admin',
  //   component: AdminLayoutComponent,
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: () => import('./pages/admin/admin.module').then((m) => m.AdminModule),
  //       title: 'Dashboard | Cimdata',
  //       data: { preload: true },
  //     }
  //   ]
  // },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule),
    data: { preload: true }
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
