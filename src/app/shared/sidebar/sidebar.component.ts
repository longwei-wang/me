import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { ContentService } from '../../services/content.service';

interface NavLink {
  label: string;
  path: string;
}

interface NavGroup {
  label: string;
  links: NavLink[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [AsyncPipe, RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  private readonly content = inject(ContentService);

  readonly profile$ = this.content.getProfile();
  readonly open = signal(false);

  /** Navigation mirrors the reference site: Home / Group / Research / Teaching. */
  readonly nav: NavGroup[] = [
    { label: 'Home', links: [{ label: 'About', path: '/' }] },
    { label: 'Group', links: [{ label: 'Members', path: '/group' }] },
    {
      label: 'Research',
      links: [
        { label: 'Projects', path: '/projects' },
        { label: 'Publications', path: '/publications' },
      ],
    },
    { label: 'Teaching', links: [{ label: 'Courses', path: '/courses' }] },
  ];

  toggle(): void {
    this.open.update((v) => !v);
  }

  close(): void {
    this.open.set(false);
  }
}
