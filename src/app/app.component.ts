import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContentService } from './services/content.service';
import { SeoService } from './services/seo.service';
import { AnalyticsService } from './services/analytics.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, SidebarComponent, FooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly content = inject(ContentService);
  private readonly seo = inject(SeoService);
  private readonly analytics = inject(AnalyticsService);
  readonly profile$ = this.content.getProfile();

  constructor() {
    this.seo.init();
    this.analytics.init();
  }
}
