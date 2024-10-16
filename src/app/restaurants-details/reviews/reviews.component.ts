import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>;

  constructor(private restaurantsServices: RestaurantsService, private activedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restaurantsServices.reviews(this.activedRouter.parent.snapshot.params['id']);
  }

}
