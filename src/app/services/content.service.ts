import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {
  Course,
  HomeContent,
  Member,
  Profile,
  Project,
  Publication,
} from '../models/content.models';

import profile from '../../data/profile.json';
import home from '../../data/home.json';
import members from '../../data/members.json';
import publications from '../../data/publications.json';
import projects from '../../data/projects.json';
import courses from '../../data/courses.json';
import researchVision from '../../data/research-vision.json';

/**
 * Serves all site content from JSON that is imported at build time.
 *
 * Bundling the data (rather than fetching it over HTTP) lets it be baked into
 * the prerendered static HTML for SEO, and works identically in the browser and
 * during Node prerendering. The API stays Observable-based so consuming
 * components are unchanged.
 */
@Injectable({ providedIn: 'root' })
export class ContentService {
  getProfile(): Observable<Profile> {
    return of(profile as unknown as Profile);
  }

  getHome(): Observable<HomeContent> {
    return of(home as unknown as HomeContent);
  }

  getMembers(): Observable<Member[]> {
    return of(members as unknown as Member[]);
  }

  getPublications(): Observable<Publication[]> {
    return of(publications as unknown as Publication[]);
  }

  getProjects(): Observable<Project[]> {
    return of(projects as unknown as Project[]);
  }

  getCourses(): Observable<Course[]> {
    return of(courses as unknown as Course[]);
  }

  getResearchVision(): Observable<string[]> {
    return of(researchVision as string[]);
  }
}
