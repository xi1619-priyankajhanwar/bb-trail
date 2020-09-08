import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { environment } from '../environments/environment';

import { ProductSummaryListWidgetModule, ProductSummaryWidgetAccountSelectorModule } from '@backbase/retail-ang/product-summary';
import { ContactManagerWidgetModule } from '@backbase/retail-ang/contact';
import { ContactManagerWidgetExtendedModule } from '@peachtree/contact-manager-widget-extended';
import { TransactionsListWidgetExtendedModule } from '@peachtree/transactions-list-widget-extended';
import { AtmsLocatorWidgetModule } from '@peachtree/atms-locator-widget';
import { AtmDataModule } from '@peachtree/atm-data';
 

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BackbaseCoreModule.forRoot({
      features: {
          THEME_V2: true
      }
    }),
    RouterModule.forRoot([], { initialNavigation: false, useHash: true }),
    ContactManagerWidgetExtendedModule,
    TransactionsListWidgetExtendedModule,
    AtmsLocatorWidgetModule,
    AtmDataModule.forRoot({
      servicePath: '/atm-location-service',
    }),
  ],
  providers: [...environment.mockProviders || []],
  bootstrap: [AppComponent]
})
export class AppModule { }
