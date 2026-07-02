import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Publication } from '../../models/content.models';

@Component({
  selector: 'app-publication-item',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './publication-item.component.html',
  styleUrl: './publication-item.component.scss',
})
export class PublicationItemComponent {
  @Input({ required: true }) publication!: Publication;
}
