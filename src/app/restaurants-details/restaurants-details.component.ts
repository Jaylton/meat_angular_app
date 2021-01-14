import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { RestaurantsService } from 'app/restaurants/restaurants.service';

@Component({
  selector: 'mt-restaurants-details',
  templateUrl: './restaurants-details.component.html'
})
export class RestaurantsDetailsComponent implements OnInit {

  restaurant: Restaurant;

  constructor(private restaurantsServices: RestaurantsService, private activedRouter: ActivatedRoute) { }

  ngOnInit() {

    this.restaurantsServices.restaurantById(this.activedRouter.snapshot.params['id']).subscribe(restaurant => this.restaurant = restaurant)
  }

}
