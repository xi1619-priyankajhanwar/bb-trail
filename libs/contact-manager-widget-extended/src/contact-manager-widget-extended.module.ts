import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { ContactManagerWidgetExtendedComponent } from './contact-manager-widget-extended.component';
import { ContactManagerWidgetModule } from '@backbase/retail-ang/contact';
import { IconModule } from '@backbase/foundation-ang/ui';

@NgModule({
  declarations: [ContactManagerWidgetExtendedComponent],
  imports: [
    CommonModule,
    ContactManagerWidgetModule,
    BackbaseCoreModule.withConfig({
      classMap: { ContactManagerWidgetExtendedComponent }
    }),
    IconModule
  ]
})
export class ContactManagerWidgetExtendedModule { }