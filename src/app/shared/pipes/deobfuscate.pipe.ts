import { Pipe, PipeTransform, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Decodes a base64-encoded contact string (email/phone) at runtime.
 *
 * Contact details are stored base64-encoded in the data so that automated
 * email/phone harvesters scraping the static files find no plain-text address
 * to match. Decoding is deliberately gated to the browser: during build-time
 * prerendering (Node) it returns an empty string, so the real address is never
 * written into the static HTML — it is only reconstructed in a live browser.
 */
@Pipe({
  name: 'deobfuscate',
  standalone: true,
})
export class DeobfuscatePipe implements PipeTransform {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  transform(value: string | undefined | null): string {
    if (!value || !this.isBrowser) {
      return '';
    }
    try {
      return atob(value);
    } catch {
      return '';
    }
  }
}
