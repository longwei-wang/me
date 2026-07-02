import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/** A titled content block with an anchor id, used to compose the home page. */
@Component({
  selector: 'app-section',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
})
export class SectionComponent {
  @Input({ required: true }) heading!: string;
  @Input() anchor?: string;
}
