import { Injectable } from '@angular/core';
import { dbInt } from "../db-int";
import { Category, Color, Model } from '../types';
import { categories, colors, models } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class MockupService implements dbInt {
  getCategories(): Promise<Category[]> {
    return new Promise(resolve => resolve(categories));
  }

  getColors(): Promise<Color[]> {
    return new Promise(resolve => resolve(colors));
  }

  getModels(category?: number): Promise<Model[]> {
    return new Promise(resolve => {
      if (category) {
        resolve(models.filter(m => m.categories.some(c => c.id === category)));
      } else {
        resolve(models);
      }
    });
  }

}
