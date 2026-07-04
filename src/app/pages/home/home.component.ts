import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';

import { ContentService } from '../../services/content.service';
import { AnalyticsService } from '../../services/analytics.service';
import { SectionComponent } from '../../shared/section/section.component';
import { DeobfuscatePipe } from '../../shared/pipes/deobfuscate.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, NgOptimizedImage, SectionComponent, DeobfuscatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private readonly content = inject(ContentService);
  private readonly analytics = inject(AnalyticsService);
  readonly home$ = this.content.getHome();
  readonly profile$ = this.content.getProfile();

  onEmailClick(): void {
    this.analytics.track('email_click', { role: 'professor' });
  }
}
