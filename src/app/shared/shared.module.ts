import { NgModule } from '@angular/core';

import { ModulesModule } from './modules/modules.module';

@NgModule({
  exports: [ModulesModule],
})
export class SharedModule {}
