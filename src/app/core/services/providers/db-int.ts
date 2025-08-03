import { category, color, model } from "./types";

export interface dbInt {

    getCategories(): Promise<category[]>;
    getColors(): Promise<color[]>;

    getModels(category?: number): Promise<model[]>;
}