import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from '../../layouts/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        pathMatch: 'full',
        loadComponent: () =>
          import('./dashboard/dashboard.component').then((m) => m.DashboardComponent),
        data: {
          breadcrumbItem: {
            key: 'dashboard',
            label: 'Dashboard'
          }
        }
      },
      {
        path: 'pages',
        loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
        data: {
          breadcrumbItem: {
            key: 'pages',
            label: 'Pages'
          }
        }
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
