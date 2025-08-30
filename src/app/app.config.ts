import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { MAT_DATE_LOCALE } from '@angular/material/core';
import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { LocalDbService } from './core/local-db/local-db-service';
import { MockupService } from './core/local-db/mock/mockup-service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    {
      provide: LocalDbService,
      useClass: environment.mock ? MockupService : LocalDbService,
    },
    {
      provide: MAT_DATE_LOCALE,
      useValue: "he-IL",
    },
    {
      provide: LOCALE_ID,
      useValue: "he-IL",
    },
  ]
};
