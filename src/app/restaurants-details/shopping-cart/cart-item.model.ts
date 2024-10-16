import { MenuItem } from "../menu-item/menu-item.mode";

export class CartItem {
    constructor(public menuItem: MenuItem, public quantity: number = 1) {

    }

    value(): number {
        return this.quantity * this.menuItem.price;
    }
}