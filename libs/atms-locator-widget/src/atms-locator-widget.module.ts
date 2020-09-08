import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { AtmsLocatorWidgetComponent } from './atms-locator-widget.component';
import { AtmListComponent } from './lib/atm-list/atm-list.component';
import { IconModule } from '@backbase/foundation-ang/ui';
import { HeaderModule } from './header/header.module';

@NgModule({
  declarations: [AtmsLocatorWidgetComponent, AtmListComponent],
  imports: [
    CommonModule,
    BackbaseCoreModule.withConfig({
      classMap: { AtmsLocatorWidgetComponent }
    }),
    IconModule,
    HeaderModule
  ],
  exports: [HeaderModule]
})
export class AtmsLocatorWidgetModule { }