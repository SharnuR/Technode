import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark' | 'system';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);
  readonly mode = signal<ThemeMode>('system');

  init() {
    if (!this.isBrowser) return;

    const mode = (localStorage.getItem('theme') as ThemeMode) || 'system';
    this.apply(mode);
  }

  apply(mode: ThemeMode) {
    this.mode.set(mode);
    if (!this.isBrowser) return;

    localStorage.setItem('theme', mode);

    const html = document.documentElement;

    if (mode === 'system') {
      const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      html.dataset['theme'] = dark ? 'dark' : 'light';
      return;
    } else {
      html.dataset['theme'] = mode;
    }
  }

  toggle() {
    this.apply(this.mode() === 'dark' ? 'light' : 'dark');
  }
}
