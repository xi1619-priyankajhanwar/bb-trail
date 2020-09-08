import { Component, OnInit } from '@angular/core';
import { CopyRoutes } from '@backbase/core-ang';
import { ContactManagerWidgetComponent } from '@backbase/retail-ang/contact';
@Component({
  selector: 'pt-contact-manager-widget-extended',
  templateUrl: './contact-manager-extended-widget.html',
  styles: []
})
@CopyRoutes(ContactManagerWidgetComponent)
export class ContactManagerWidgetExtendedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
