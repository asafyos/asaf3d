import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { environment } from '../../../environments/environment';
import { LocalDb } from './local-db';
import { Mockup } from './providers/mock/mockup';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: []
})
export class ServicesModule {

  constructor() {
  }

  static forRoot(): ModuleWithProviders<ServicesModule> {
    return ({
      ngModule: ServicesModule,
      providers: [
        {
          provide: LocalDb,
          useClass: environment.mock ? Mockup : LocalDb
        }
      ]
    })
  }

}
