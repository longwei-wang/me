import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { ContentService } from '../../services/content.service';
import { CourseItemComponent } from '../../shared/course-item/course-item.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [AsyncPipe, CourseItemComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  private readonly content = inject(ContentService);
  readonly courses$ = this.content.getCourses();
}
