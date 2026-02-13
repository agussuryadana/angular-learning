import { Routes } from '@angular/router';
import { Home } from './app-home'
import { User } from './app-user'

export const routes: Routes = [
    {
        path:'app-home',
        title: 'Home Page',
        component: Home,
    },
    {
        path:'app-user',
        title: 'User Page',
        component: User,
    },
];
