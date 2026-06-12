import {Routes } from '@angular/router';

export const PRODUCT_ROUTES: Routes = [


    { path: '', 
        
    //component: Products
        loadComponent: () => import('./products/products').then(m => m.Products)
     }
]