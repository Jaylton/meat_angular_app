import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { MEAT_API } from 'app/app.api';
import { CartItem } from 'app/restaurants-details/shopping-cart/cart-item.model';
import { ShoppingCartService } from 'app/restaurants-details/shopping-cart/shopping-cart.service';
import { Observable } from 'rxjs';
import { Order } from './order.model';

@Injectable()
export class OrderService {

  constructor(private cartService: ShoppingCartService, private http: Http) { }

  cartItems(): CartItem[] {
    return this.cartService.items;
  }

  itemsValue(): number {
    return this.cartService.total();
  }

  increaseQty(item: CartItem) {
    this.cartService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.cartService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item);
  }

  clear() {
    this.cartService.clear()
  }

  checkOrder(order: Order): Observable<any> {
    const headers = new Headers();
    headers.append('Content-type', 'application/json')
    return this.http.post(`${MEAT_API}/orders`, JSON.stringify(order), new RequestOptions({ headers: headers })).map(res => res.json());
  }
}
