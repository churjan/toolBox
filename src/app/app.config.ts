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

/** 配置 ng-zorro-antd 国际化 **/
import { en_US, NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';

/** 导入需要使用的 Angular 语言包 **/
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import zh from '@angular/common/locales/zh';
registerLocaleData(en);
registerLocaleData(zh);

const i18nProvider = {
  provide: NZ_I18N,
  useFactory: () => {
    const localId = localStorage.getItem('language') || navigator.language;
    console.log('localId', localId);
    switch (localId) {
      case 'en':
        return en_US;
      case 'zh':
        return zh_CN;
      default:
        return zh_CN;
    }
  },
};

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
