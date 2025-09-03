import { Category, Color, Model } from "./types";

export interface dbInt {

    getCategories(): Promise<Category[]>;
    getColors(): Promise<Color[]>;

    getModels(search?: { category?: number, searchVal?: string }): Promise<Model[]>;
    getModel(modelId: number): Promise<Model | null>;

    getPrintBaseParams(): Promise<{
        modelBaseCost: number;
        avgColorPrice: number;
        hourBaseCost: number;
        amsExtraPercentage: number;
    }>;
}