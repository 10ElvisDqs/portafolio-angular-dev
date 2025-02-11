import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboardLayout/dashboardLayout.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import(
            './modules/home/pages/home-page/home-page.component'
          ),
        data: {
          icon: 'https://img.icons8.com/?size=100&id=9zcV0gKAozhn&format=png&color=000000',
          title: 'home',
          description: 'home',
        },
      },
      {

        path: 'projects',
        loadChildren: () =>
          import('./modules/projects/projects.routes').then(m => m.PROJECTS_ROUTES),
        data: {
          icon: 'https://img.icons8.com/?size=100&id=53450&format=png&color=000000',
          title: 'projects',
          description: 'projects',
        },
      },
      {

        path: 'skills',
        loadComponent: () =>
          import('./modules/skills/components/skills/skills.component'),
        data: {
          icon: 'https://img.icons8.com/?size=100&id=DTDSZObb58ws&format=png&color=000000',
          title: 'skills',
          description: 'skills',
        },
      },
      {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];
