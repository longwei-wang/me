import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import {
  Course,
  HomeContent,
  Member,
  Profile,
  Project,
  Publication,
} from '../models/content.models';

/**
 * Loads all site content from static JSON in assets/data via HttpClient.
 * Responses are cached with shareReplay so each file is fetched at most once.
 */
@Injectable({ providedIn: 'root' })
export class ContentService {
  private readonly http = inject(HttpClient);
  private readonly base = 'assets/data';

  private readonly cache = new Map<string, Observable<unknown>>();

  private get<T>(file: string): Observable<T> {
    if (!this.cache.has(file)) {
      this.cache.set(
        file,
        this.http.get<T>(`${this.base}/${file}`).pipe(shareReplay(1)),
      );
    }
    return this.cache.get(file) as Observable<T>;
  }

  getProfile(): Observable<Profile> {
    return this.get<Profile>('profile.json');
  }

  getHome(): Observable<HomeContent> {
    return this.get<HomeContent>('home.json');
  }

  getMembers(): Observable<Member[]> {
    return this.get<Member[]>('members.json');
  }

  getPublications(): Observable<Publication[]> {
    return this.get<Publication[]>('publications.json');
  }

  getProjects(): Observable<Project[]> {
    return this.get<Project[]>('projects.json');
  }

  getCourses(): Observable<Course[]> {
    return this.get<Course[]>('courses.json');
  }
}
