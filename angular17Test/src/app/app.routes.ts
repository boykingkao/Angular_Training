import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemListComponent } from './item-list/item-list.component';

export const routes: Routes = [
    {
        path : "home",component:HomeComponent
    },
    {
        path : "items",component:ItemListComponent
    }
];
