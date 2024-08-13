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

export { i18nProvider };
