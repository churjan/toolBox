import {
  ApplicationConfig,
  provideZoneChangeDetection,
  importProvidersFrom,
  inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideNzIcons } from './icons-provider';
import { i18nProvider } from './i18n-provider';

const providers: any[] = [
  provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes),
  provideNzIcons(),
  importProvidersFrom(FormsModule),
  provideAnimationsAsync(),
  provideHttpClient(),
];

providers.push(i18nProvider);

export const appConfig: ApplicationConfig = {
  providers,
};
