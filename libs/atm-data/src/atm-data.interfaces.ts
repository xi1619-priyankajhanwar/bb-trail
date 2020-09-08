export interface Additions {
    [key: string]: any;
}
export interface Customizable {
    additions?: Additions;
}
export interface Location extends Customizable {
    coordinates: Coordinates;
    address: Address;
    id: string;
    name: string;
    type: string;
}
export interface Coordinates extends Customizable {
    latitude: number;
    longitude: number;
}
export interface Address extends Customizable {
    nameOrNumber: string;
    country: string;
    postcode: string;
    street: string;
    town: string;
}
export interface LocationsResponseObject extends Customizable {
    locations: Locations;
}
export type Locations = Array<Location>;
