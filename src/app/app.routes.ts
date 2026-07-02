import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Dr. Longwei Wang — Home',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'group',
    title: 'Group — Dr. Longwei Wang',
    loadComponent: () => import('./pages/group/group.component').then((m) => m.GroupComponent),
  },
  {
    path: 'projects',
    title: 'Projects — Dr. Longwei Wang',
    loadComponent: () =>
      import('./pages/projects/projects.component').then((m) => m.ProjectsComponent),
  },
  {
    path: 'publications',
    title: 'Publications — Dr. Longwei Wang',
    loadComponent: () =>
      import('./pages/publications/publications.component').then((m) => m.PublicationsComponent),
  },
  {
    path: 'courses',
    title: 'Teaching — Dr. Longwei Wang',
    loadComponent: () =>
      import('./pages/courses/courses.component').then((m) => m.CoursesComponent),
  },
  { path: '**', redirectTo: '' },
];
