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
        path: "",
        loadChildren: () => import('./pages/home/home-module').then((m) => m.HomeModule),
    },
    {
        path: "**",
        redirectTo: "/"
    }
];
