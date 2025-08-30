import { Injectable } from '@angular/core';
import { dbInt } from "../db-int";
import { Category, Color, Model } from '../types';

@Injectable({
  providedIn: 'root'
})
export class MockupService implements dbInt {
  getCategories(): Promise<Category[]> {
    return new Promise(async (resolve, reject) => {
      const data = await import("./mock-data/categories")
      resolve(data.categories);
    });
  }
  getColors(): Promise<Color[]> {
    return new Promise(async (resolve, reject) => {
      const data = await import("./mock-data/colors")
      resolve(data.colors);
    });
  }
  getModels(category?: number): Promise<Model[]> {
    return new Promise(async (resolve, reject) => {
      const data = await import("./mock-data/models")

      if (category) {
        resolve(data.models.filter(m => m.categories.some(c => c.id === category)));
      } else {
        resolve(data.models);
      }
    });
  }

}
