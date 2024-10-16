import { NgModule } from "@angular/core";
import { OrderService } from "app/order/order.service";
import { ShoppingCartService } from "app/restaurants-details/shopping-cart/shopping-cart.service";
import { RestaurantsService } from "app/restaurants/restaurants.service";

@NgModule({
    providers: [ShoppingCartService, RestaurantsService, OrderService]
})
export class CoreModule { }