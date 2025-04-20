import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { MenuComponent } from './components/menu/menu.component';
import { OrderposComponent } from './components/orderpos/orderpos.component';
import { OrderplaceComponent } from "./pages/orderplace/orderplace.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [OrderposComponent, OrderplaceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'OrderPosFrontend';
}
