import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { ContentService } from '../../services/content.service';
import { PublicationItemComponent } from '../../shared/publication-item/publication-item.component';
import { Publication } from '../../models/content.models';

interface YearGroup {
  year: number;
  items: Publication[];
}

@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [PublicationItemComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.scss',
})
export class PublicationsComponent {
  private readonly content = inject(ContentService);
  private readonly publications = toSignal(this.content.getPublications(), {
    initialValue: [] as Publication[],
  });
  private readonly profile = toSignal(this.content.getProfile());

  /** Google Scholar link pulled from the profile's social links. */
  readonly scholarUrl = computed(
    () =>
      this.profile()?.social.find((link) => /scholar/i.test(link.label))?.url ?? null,
  );

  /** Publications grouped by year, most recent first. */
  readonly groups = computed<YearGroup[]>(() => {
    const byYear = new Map<number, Publication[]>();
    for (const pub of this.publications()) {
      const bucket = byYear.get(pub.year) ?? [];
      bucket.push(pub);
      byYear.set(pub.year, bucket);
    }
    return [...byYear.entries()]
      .sort((a, b) => b[0] - a[0])
      .map(([year, items]) => ({ year, items }));
  });
}
