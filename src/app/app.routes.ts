import { Routes } from '@angular/router';
import { Card } from './card/card';
import { HomeComponent } from './home/home';
import { Contact } from './contact/contact';
import { ProductDetail } from './product-detail/product-detail';
import { PayNow } from './pay-now/pay-now';
import { ProductPage } from './product-page/product-page';

export const routes: Routes = [
    {
        path: 'card',
        component: Card
    },
    {
        path: 'contact',
        component: Contact
    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'product-detail',
        component: ProductDetail
    },
    {
        path: 'paynow',
        component: PayNow
    },
    {
        path: 'products',
        component: ProductPage
    }
];

