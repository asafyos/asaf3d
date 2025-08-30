import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "home",
        redirectTo: "/"
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
