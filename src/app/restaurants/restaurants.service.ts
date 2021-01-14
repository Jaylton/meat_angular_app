import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MEAT_API } from 'app/app.api';
import { Observable } from 'rxjs/Observable';
import { Restaurant } from './restaurant/restaurant.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { errorHandler } from 'app/app.errorHandler';
import { MenuItem } from 'app/restaurants-details/menu-item/menu-item.mode';

@Injectable()
export class RestaurantsService {

  res: Restaurant[] = [{
    id: "bread-bakery",
    name: "Bread & Bakery",
    category: "Bakery",
    deliveryEstimate: "25m",
    rating: 4.9,
    imagePath: "assets/img/restaurants/breadbakery.png"
  },
  {
    id: "burger-house",
    name: "Burger House",
    category: "Hamburgers",
    deliveryEstimate: "100m",
    rating: 3.5,
    imagePath: "assets/img/restaurants/burgerhouse.png"
  },]

  constructor(private http: Http) { }

  restaurants(): Observable<Restaurant[]> {
    return this.http.get(`${MEAT_API}/restaurants`).map(response => response.json())
      .catch(errorHandler.handleError);
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http.get(`${MEAT_API}/restaurants/${id}`).map(response => response.json())
      .catch(errorHandler.handleError);
  }

  reviews(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`).map(response => response.json())
      .catch(errorHandler.handleError);
  }

  menu(id: string): Observable<MenuItem[]> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/menu`).map(response => response.json())
      .catch(errorHandler.handleError);
  }

}
