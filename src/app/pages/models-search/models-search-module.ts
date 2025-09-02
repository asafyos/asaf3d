import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ModelCard } from '../../components/model-card/model-card';
import { ModelsSearchRoutingModule } from './models-search-routing-module';
import { ModelsSearchPage } from './models-search.page';


@NgModule({
  declarations: [
    ModelsSearchPage
  ],
  imports: [
    CommonModule,
    ModelsSearchRoutingModule,
    ModelCard
  ]
})
export class ModelsSearchModule { }
