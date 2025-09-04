import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "home",
        redirectTo: "/"
    },

    {
        path: "model/:id",
        loadChildren: () => import('./pages/model/model-module').then((m) => m.ModelModule),
    },

    {
        path: "models",
        loadChildren: () => import('./pages/models-search/models-search-module').then((m) => m.ModelsSearchModule),
    },

    {
        path: "cart",
        loadChildren: () => import('./pages/cart/cart-module').then((m) => m.CartModule),
    },

    {
        path: "",
        loadChildren: () => import('./pages/home/home-module').then((m) => m.HomeModule),
    },
    {
        path: "**",
        redirectTo: "/"
    }
];
