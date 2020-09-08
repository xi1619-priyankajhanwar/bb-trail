import { Component, OnInit, Input } from '@angular/core';
import { ItemModel } from '@backbase/foundation-ang/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'pt-atm-list',
  templateUrl: './atm-list.component.html',
  styles: []
})
export class AtmListComponent implements OnInit {
  @Input() locations = [];
  
  constructor( private model: ItemModel) { }
    
  numberOfLocations$: Observable<number|undefined> =
  this.model.property('numberOfLocations');
  ngOnInit() {
  }

}
