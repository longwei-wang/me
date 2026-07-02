import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { ContentService } from '../../services/content.service';
import { MemberCardComponent } from '../../shared/member-card/member-card.component';
import { Member } from '../../models/content.models';

@Component({
  selector: 'app-group',
  standalone: true,
  imports: [MemberCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './group.component.html',
  styleUrl: './group.component.scss',
})
export class GroupComponent {
  private readonly content = inject(ContentService);
  private readonly members = toSignal(this.content.getMembers(), { initialValue: [] as Member[] });

  readonly current = computed(() => this.members().filter((m) => m.status === 'current'));
  readonly former = computed(() => this.members().filter((m) => m.status === 'former'));
}
