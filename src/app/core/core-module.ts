import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { environment } from '../../environments/environment';
import { LocalDbModule } from './local-db/local-db-module';
import { LocalDbService } from './local-db/local-db-service';
import { MockupService } from './local-db/mock/mockup-service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LocalDbModule,
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: LocalDbService,
          useClass: environment.mock ? MockupService : LocalDbService
        }
      ]
    }
  }

}
