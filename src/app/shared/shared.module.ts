import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { ModulesModule } from './modules/modules.module';

@NgModule({
  exports: [FormsModule, ModulesModule],
})
export class SharedModule {}
