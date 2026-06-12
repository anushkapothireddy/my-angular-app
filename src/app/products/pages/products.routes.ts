import {Routes } from '@angular/router';
import { Products } from './products/products';

export const PRODUCT_ROUTES: Routes = [


    { path: '', 
        
    //component: Products
        loadComponent: () => import('./products/products').then(m => m.Products)
     }
]