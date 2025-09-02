import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
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
    ModelCard,
    MatInput,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class ModelsSearchModule { }
