import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CartRoutingModule } from './cart-routing-module';
import { CartPage } from './cart.page';
import { OrderItem } from './components/order-item/order-item';


@NgModule({
  declarations: [
    CartPage,
    OrderItem
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,

  ]
})
export class CartModule { }
