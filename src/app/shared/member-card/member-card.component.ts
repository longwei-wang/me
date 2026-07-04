import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Member } from '../../models/content.models';
import { DeobfuscatePipe } from '../pipes/deobfuscate.pipe';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-member-card',
  standalone: true,
  imports: [NgOptimizedImage, DeobfuscatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './member-card.component.html',
  styleUrl: './member-card.component.scss',
})
export class MemberCardComponent {
  @Input({ required: true }) member!: Member;

  private readonly analytics = inject(AnalyticsService);

  onEmailClick(): void {
    this.analytics.track('email_click', { role: 'student', name: this.member.name });
  }

  onPortfolioClick(): void {
    this.analytics.track('portfolio_click', { role: 'student', name: this.member.name });
  }
}
