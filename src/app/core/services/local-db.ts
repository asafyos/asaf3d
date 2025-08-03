import { Injectable } from '@angular/core';
import { dbInt } from './providers/db-int';
import { category, color, model } from './providers/types';

@Injectable({
  providedIn: 'root'
})
export class LocalDb implements dbInt {
  getCategories(): Promise<category[]> {
    throw new Error('Method not implemented.');
  }
  getColors(): Promise<color[]> {
    throw new Error('Method not implemented.');
  }
  getModels(category?: number): Promise<model[]> {
    throw new Error('Method not implemented.');
  }

}
