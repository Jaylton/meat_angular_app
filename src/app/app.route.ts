import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { OrderSummaryComponent } from "./order/order-summary/order-summary.component";
import { OrderComponent } from "./order/order.component";
import { MenuComponent } from "./restaurants-details/menu/menu.component";
import { RestaurantsDetailsComponent } from "./restaurants-details/restaurants-details.component";
import { ReviewsComponent } from "./restaurants-details/reviews/reviews.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";


export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'order', loadChildren: './order/order.module.ts#OrderModule' },
    { path: 'order-summary', component: OrderSummaryComponent },
    { path: 'restaurants', component: RestaurantsComponent },
    {
        path: 'restaurants/:id', component: RestaurantsDetailsComponent,
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: MenuComponent },
            { path: 'reviews', component: ReviewsComponent },
        ]
    },
    {
        path: 'about', loadChildren: './about/about.module.ts#AboutModule',
    }
]