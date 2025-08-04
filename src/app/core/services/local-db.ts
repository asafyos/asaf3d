import { Injectable } from '@angular/core';
import { dbInt } from './providers/db-int';
import { Category, Color, Model } from './providers/types';

@Injectable({
  providedIn: 'root'
})
export class LocalDb implements dbInt {
  getCategories(): Promise<Category[]> {
    throw new Error('Method not implemented.');
  }
  getColors(): Promise<Color[]> {
    throw new Error('Method not implemented.');
  }
  getModels(category?: number): Promise<Model[]> {
    throw new Error('Method not implemented.');
  }

}
