import { createMocks } from '@backbase/foundation-ang/data-http';
import { Provider } from '@angular/core';
import { ATM_DATA_CONFIG } from './atm-data.service';
const examples = [
    {
        "urlPattern": "/{version}/locations",
        "method": "GET",
        "responses": [
            {
                "status": 200,
                "body": {
                    "locations": [
                        {
                            "coordinates": {
                                "latitude": 12,
                                "longitude": 25
                            },
                            "address": {
                                "nameOrNumber": "xyz",
                                "country": "france",
                                "postcode": "12345",
                                "street": "street 1",
                                "town": "paris"
                            },
                            "id": "1",
                            "name": "location name",
                            "type": "office"
                        },
                        {
                            "coordinates": {
                                "latitude": 13,
                                "longitude": 26
                            },
                            "address": {
                                "nameOrNumber": "abc",
                                "country": "netherlands",
                                "postcode": "12345",
                                "street": "street 2",
                                "town": "amsterdam"
                            },
                            "id": "2",
                            "name": "location name 2",
                            "type": "office"
                        },
                        {
                            "coordinates": {
                                "latitude": 14,
                                "longitude": 28
                            },
                            "address": {
                                "nameOrNumber": "jkl",
                                "country": "brussels",
                                "postcode": "12345",
                                "street": "street 3",
                                "town": "belgium"
                            },
                            "id": "3",
                            "name": "location name3",
                            "type": "office"
                        }
                    ]
                },
                "type": "LocationsResponseObject"
            }
        ]
    },
    {
        "urlPattern": "/{version}/locations/{locationId}",
        "method": "GET",
        "responses": [
            {
                "status": 200,
                "body": {
                    "coordinates": {
                        "latitude": 13,
                        "longitude": 26
                    },
                    "address": {
                        "nameOrNumber": "9",
                        "country": "Netherlands",
                        "postcode": "1018LL",
                        "street": "Jacob Bontiusplaats",
                        "town": "Amsterdam"
                    },
                    "id": "2",
                    "name": "Backbase Amsterdam HQ",
                    "type": "office"
                },
                "type": "Location"
            }
        ]
    }
];
export const AtmDataMocksProvider: Provider = createMocks(examples, ATM_DATA_CONFIG);
