import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

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
    }
  ]
};
