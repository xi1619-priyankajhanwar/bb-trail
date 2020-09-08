import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { TransactionsListWidgetModule } from '@backbase/retail-ang/transactions';
import { TransactionsListWidgetExtendedComponent } from './transactions-list-widget-extended.component';

@NgModule({
  declarations: [TransactionsListWidgetExtendedComponent],
  imports: [
    CommonModule,
    TransactionsListWidgetModule,
    BackbaseCoreModule.withConfig({
      classMap: { TransactionsListWidgetExtendedComponent }
    })
  ]
})
export class TransactionsListWidgetExtendedModule { }