import { Component } from '@angular/core';
import { MenuComponent } from "../../components/menu/menu.component";
import { CartComponent } from "../../components/cart/cart.component";

@Component({
  selector: 'app-orderplace',
  standalone: true,
  imports: [MenuComponent, CartComponent],
  templateUrl: './orderplace.component.html',
  styleUrl: './orderplace.component.scss'
})
export class OrderplaceComponent {

}
