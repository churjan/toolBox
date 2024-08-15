import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { iconsProvider } from './icons-provider';
import { i18nProvider } from './i18n-provider';

const providers: any[] = [
  provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes),
  provideAnimationsAsync(),
  provideHttpClient(),
  iconsProvider,
  i18nProvider,
];

export const appConfig: ApplicationConfig = {
  providers,
};
