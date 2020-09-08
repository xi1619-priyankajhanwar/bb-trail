
import { Injectable } from '@angular/core';
import {
  Location, // Location Interface
  LocationsResponseObject, // Response body object
  AtmDataService, // Data Service
} from '@peachtree/atm-data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
 
export { Location };
 
@Injectable()
export class AtmsLocatorWidgetService {
  constructor(private readonly atmDataService: AtmDataService) {}
 
  // Locations is a read only property that will contain the observable data fetched from the data module.
  readonly locations: Observable<Array<Location>> = this.atmDataService.getLocations()
  .pipe(
    map(
      (response: HttpResponse<LocationsResponseObject>): Array<Location> => {
        return response.body ? response.body.locations : [];
      },
    ),
  );
}