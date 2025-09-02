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

  getModels(search?: { category?: number, searchVal?: string }): Promise<Model[]> {
    return new Promise(resolve => {
      if (search) {
        resolve(models.filter(m => {
          var yes = true;
          if (search.searchVal) {
            yes = m.name.includes(search.searchVal);
          }
          if (yes && search.category) {
            yes = yes && m.categories.some(c => c.id === search.category);
          }
          return yes;
        }));
      } else {
        resolve(models);
      }
    });
  }

  getModel(modelId: number): Promise<Model | null> {
    return new Promise(resolve => {
      const model: Model | null = models.find(m => m.id == modelId) || null
      resolve(model);
    });
  }

  getPrintBaseParams(): Promise<{ modelBaseCost: number; avgColorPrice: number; hourBaseCost: number; }> {
    return new Promise(resolve => resolve({ modelBaseCost: 5, avgColorPrice: 89, hourBaseCost: 5 }));
  }
}
