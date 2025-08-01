import { Routes } from '@angular/router';

import { HomePage } from './pages/home/home.page';

export const routes: Routes = [
    {
        path: "home",
        redirectTo: "/"
    },
    {
        path: "",
        component: HomePage,
    }, 

];
