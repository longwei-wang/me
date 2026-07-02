import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  /** Owner name shown in the copyright line. */
  @Input() name = '';
  /** Address lines — shown only on mobile, where the sidebar address is hidden. */
  @Input() address: string[] = [];
  readonly year = 2026;
}
