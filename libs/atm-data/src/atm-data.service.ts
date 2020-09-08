import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { Inject, InjectionToken } from "@angular/core";
import { ServiceDataHttpConfig } from "@backbase/foundation-ang/data-http";
import { Location, Coordinates, Address, LocationsResponseObject, Locations } from "./atm-data.interfaces";
const version = 'v1', normalizeHttpParameter = (accum: NormalizedHttpParameters, [key, value]: [string, string | string[] | undefined | number]) => {
    if (value === undefined) {
        return accum;
    }
    if (typeof value === 'number') {
        return { ...accum, [key]: String(value) };
    }
    return { ...accum, [key]: value };
}, normalizeHttpParameters = (params: HttpParameters = {}): NormalizedHttpParameters => Object.entries(params).reduce(normalizeHttpParameter, {});
export const ATM_DATA_CONFIG = new InjectionToken("AtmData Data Service :: Default HTTP Config");
@Injectable({
    providedIn: 'root'
})
export class AtmDataService {
    constructor(private readonly http: HttpClient, 
    @Inject(ATM_DATA_CONFIG)
    private readonly config: ServiceDataHttpConfig) { }
    getLocations(params?: undefined, headers: HttpHeaders = new HttpHeaders({})): Observable<HttpResponse<LocationsResponseObject>> {
        const uri = `${this.config.apiRoot}${this.config.servicePath}/${version}/locations`;
        return this.http.request<LocationsResponseObject>('get', uri, {
            params: normalizeHttpParameters(params),
            headers,
            observe: 'response',
            responseType: 'json',
            withCredentials: false,
        });
    }
    getLocationsRecordByLocationId(locationId: string, params?: undefined, headers: HttpHeaders = new HttpHeaders({})): Observable<HttpResponse<Location>> {
        const uri = `${this.config.apiRoot}${this.config.servicePath}/${version}/locations/${locationId}`;
        return this.http.request<Location>('get', uri, {
            params: normalizeHttpParameters(params),
            headers,
            observe: 'response',
            responseType: 'json',
            withCredentials: false,
        });
    }
}
interface NormalizedHttpParameters {
    [k: string]: string | string[];
}
interface HttpParameters {
    [k: string]: string | string[] | undefined | number;
}
