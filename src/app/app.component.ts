import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { MenuComponent } from './components/menu/menu.component';
import { OrderposComponent } from './pages/orderpos/orderpos.component';
import { OrderplaceComponent } from "./pages/orderplace/orderplace.component";
import { CommonModule } from '@angular/common';
import { LoginComponent } from "./pages/login/login.component";
import { NotificationListComponent } from './NotificationList';
import { LoadingComponent } from './Loading.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ LoadingComponent,CommonModule, RouterOutlet, RouterLink, RouterLinkActive, NotificationListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'OrderPosFrontend';
}
