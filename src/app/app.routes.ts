import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Longwei Wang — Assistant Professor, Trustworthy & Explainable AI',
    data: {
      description:
        'Longwei Wang is an Assistant Professor of Computer Science at the University of South Dakota researching explainable AI, adversarial robustness, and trustworthy machine learning.',
    },
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'group',
    title: 'Research Group — Longwei Wang',
    data: {
      description:
        'Members of Longwei Wang’s research group at the University of South Dakota, working on explainable and trustworthy AI.',
    },
    loadComponent: () => import('./pages/group/group.component').then((m) => m.GroupComponent),
  },
  {
    path: 'research-vision',
    title: 'Research Vision — Longwei Wang',
    data: {
      description:
        'Longwei Wang’s research vision: a unified scientific foundation for trustworthy AI bridging explainability, robustness, and security.',
    },
    loadComponent: () =>
      import('./pages/research-vision/research-vision.component').then(
        (m) => m.ResearchVisionComponent,
      ),
  },
  {
    path: 'projects',
    title: 'Research Projects — Longwei Wang',
    data: {
      description:
        'Research projects led by Longwei Wang in explainable AI, adversarial robustness, and trustworthy machine learning.',
    },
    loadComponent: () =>
      import('./pages/projects/projects.component').then((m) => m.ProjectsComponent),
  },
  {
    path: 'publications',
    title: 'Publications — Longwei Wang',
    data: {
      description:
        'Peer-reviewed publications by Longwei Wang at venues including TPAMI, NeurIPS, ICML, ICDM, AAAI, and the ACM Web Conference.',
    },
    loadComponent: () =>
      import('./pages/publications/publications.component').then((m) => m.PublicationsComponent),
  },
  {
    path: 'courses',
    title: 'Teaching — Longwei Wang',
    data: {
      description:
        'Courses taught by Longwei Wang at the University of South Dakota, including machine learning and pattern recognition.',
    },
    loadComponent: () =>
      import('./pages/courses/courses.component').then((m) => m.CoursesComponent),
  },
  { path: '**', redirectTo: '' },
];
