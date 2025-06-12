import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PoHttpRequestModule } from '@po-ui/ng-components';
import { RegrasDatasource } from './datasource/regras/regras.datasource';import { HistoricoDatasource } from './datasource/historico/historico.datasource';
;


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    RegrasDatasource, 
    HistoricoDatasource,   
    importProvidersFrom([BrowserAnimationsModule, PoHttpRequestModule]),

    { provide: "Window", useValue: window },
  ],
  
};

