import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';

import { ContentService } from '../../services/content.service';
import { SectionComponent } from '../../shared/section/section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, NgOptimizedImage, SectionComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private readonly content = inject(ContentService);
  readonly home$ = this.content.getHome();
  readonly profile$ = this.content.getProfile();
}
