import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InjectionToken, ModuleWithProviders } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { createServiceDataHttpConfig, DATA_HTTP_CONFIG, DataHttpModule, ServiceDataHttpConfig } from "@backbase/foundation-ang/data-http";
import { ATM_DATA_CONFIG, AtmDataService } from "./atm-data.service";
export const CONFIG_VALUE = new InjectionToken("AtmData Data Service :: Custom Http Config");
@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        DataHttpModule,
        HttpClientModule
    ],
    providers: [AtmDataService, { provide: CONFIG_VALUE, useValue: {
            servicePath: '',
        }}, {
           provide: ATM_DATA_CONFIG,
           useFactory: createServiceDataHttpConfig,
           deps: [DATA_HTTP_CONFIG, CONFIG_VALUE],
        }]
})
export class AtmDataModule {
    static forRoot(config: Partial<ServiceDataHttpConfig>): ModuleWithProviders {
        return {
            ngModule: AtmDataModule,
            providers: [
                {
                    provide: CONFIG_VALUE,
                    useValue: config,
                },
            ],
        };
    }
}
