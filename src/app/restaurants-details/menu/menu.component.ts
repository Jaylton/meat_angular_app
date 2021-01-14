import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from '../menu-item/menu-item.mode';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>;

  constructor(private restaurantsServices: RestaurantsService, private activedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.restaurantsServices.menu(this.activedRouter.parent.snapshot.params['id']);
  }

  addMenuItem(item) {
    console.log('item :>> ', item);
  }

}
