import { Injectable } from '@angular/core';
import { dbInt } from './db-int';
import { Category, Color, Model } from './types';

@Injectable({
  providedIn: 'root',
})
export class LocalDbService implements dbInt {
  getCategories(): Promise<Category[]> {
    throw new Error('Method not implemented.');
  }
  getColors(): Promise<Color[]> {
    throw new Error('Method not implemented.');
  }
  getModels(search?: { category?: number, searchVal?: string }): Promise<Model[]> {
    throw new Error('Method not implemented.');
  }
  getModel(modelId: number): Promise<Model | null> {
    throw new Error('Method not implemented.');
  }
  getPrintBaseParams(): Promise<{ modelBaseCost: number; avgColorPrice: number; hourBaseCost: number; }> {
    throw new Error('Method not implemented.');
  }

}
