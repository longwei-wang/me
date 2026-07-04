import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Sends a GA4 page_view on every route change.
 *
 * gtag.js is loaded in index.html with `send_page_view: false`, so this service
 * is the single source of page-view events — the initial load and every
 * in-app navigation are reported consistently. Runs in the browser only, so it
 * never touches `window` during prerendering.
 */
@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private readonly router = inject(Router);
  private readonly doc = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  init(): void {
    if (!this.isBrowser) {
      return;
    }

    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => {
        this.doc.defaultView?.gtag?.('event', 'page_view', {
          page_path: e.urlAfterRedirects,
          page_location: this.doc.defaultView?.location.href,
          page_title: this.doc.title,
        });
      });
  }

  /** Report a custom interaction (e.g. a button/link click). */
  track(action: string, params: Record<string, unknown> = {}): void {
    if (!this.isBrowser) {
      return;
    }
    this.doc.defaultView?.gtag?.('event', action, params);
  }
}
