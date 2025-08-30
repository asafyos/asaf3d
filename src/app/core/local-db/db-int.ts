import { Category, Color, Model } from "./types";

export interface dbInt {

    getCategories(): Promise<Category[]>;
    getColors(): Promise<Color[]>;

    getModels(category?: number): Promise<Model[]>;
}