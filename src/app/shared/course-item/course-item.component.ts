import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Course } from '../../models/content.models';

@Component({
  selector: 'app-course-item',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './course-item.component.html',
  styleUrl: './course-item.component.scss',
})
export class CourseItemComponent {
  @Input({ required: true }) course!: Course;
}
