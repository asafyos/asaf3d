import { Injectable } from '@angular/core';
import { dbInt } from "../db-int";
import { category, color, model } from '../types';

@Injectable({
  providedIn: 'root'
})
export class Mockup implements dbInt {
  getCategories(): Promise<category[]> {
    return new Promise(async (resolve, reject) => {
      const data = await import("./mock-data/categories")
      resolve(data.categories);
    });
  }
  getColors(): Promise<color[]> {
    return new Promise(async (resolve, reject) => {
      const data = await import("./mock-data/colors")
      resolve(data.colors);
    });
  }
  getModels(category?: number): Promise<model[]> {
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
