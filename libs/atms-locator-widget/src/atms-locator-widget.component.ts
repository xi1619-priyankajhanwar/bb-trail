import { Component, OnInit } from '@angular/core';
import { AtmsLocatorWidgetService } from './atms-locator-widget.service';


@Component({
  selector: 'pt-atms-locator-widget',
  template: `
      <bb-header-ui headingType="h4" heading="Example Header"></bb-header-ui>
      <pt-atm-list [locations]='locations$ | async'></pt-atm-list>
  `,
  styles: [],
  providers: [AtmsLocatorWidgetService]
})
export class AtmsLocatorWidgetComponent implements OnInit {
  
  constructor(private atmService: AtmsLocatorWidgetService) { }
  locations$ = this.atmService.locations;

  ngOnInit() {
  }

}
