import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

/**
 * Keeps meta description, canonical URL, and Open Graph URL in sync with the
 * active route. Titles are handled by the router's `title` on each route.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly meta = inject(Meta);
  private readonly doc = inject(DOCUMENT);

  private readonly siteUrl = 'https://longwei-wang.github.io/me';
  private readonly defaultDescription =
    'Longwei Wang is an Assistant Professor of Computer Science at the University of South Dakota researching explainable AI, adversarial robustness, and trustworthy machine learning.';

  init(): void {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => {
        let deepest = this.route;
        while (deepest.firstChild) {
          deepest = deepest.firstChild;
        }
        const description =
          (deepest.snapshot.data['description'] as string) ?? this.defaultDescription;

        const path = e.urlAfterRedirects === '/' ? '/' : e.urlAfterRedirects;
        const url = `${this.siteUrl}${path}`;

        this.meta.updateTag({ name: 'description', content: description });
        this.meta.updateTag({ property: 'og:description', content: description });
        this.meta.updateTag({ name: 'twitter:description', content: description });
        this.meta.updateTag({ property: 'og:url', content: url });
        this.setCanonical(url);
      });
  }

  private setCanonical(url: string): void {
    let link = this.doc.querySelector<HTMLLinkElement>("link[rel='canonical']");
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
