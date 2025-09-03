import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelsSearchPage } from './models-search.page';

const routes: Routes = [
  {
    path: '**',
    component: ModelsSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelsSearchRoutingModule { }
