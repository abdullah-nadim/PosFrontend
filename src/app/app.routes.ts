import { Routes } from '@angular/router';
import { OrderplaceComponent } from './pages/orderplace/orderplace.component';
import { OrderposComponent } from './pages/orderpos/orderpos.component';
import { TerminalloginComponent } from './pages/terminallogin/terminallogin.component';
import { LoginComponent } from './pages/login/login.component';
import { OrderdetailsComponent } from './pages/orderdetails/orderdetails.component';
import { OrderlistComponent } from './pages/orderlist/orderlist.component';
import { AdminComponent } from './pages/admin/admin.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { CreateRestaurantComponent } from './pages/create-restaurant/create-restaurant.component';
import { NotificationListComponent } from './NotificationList';

export const routes: Routes = [
    { path: "orderplace", component: OrderplaceComponent },
    { path: "orderpos", component:OrderposComponent},
    { path: "terminallogin", component: TerminalloginComponent },
    { path: "", component: LoginComponent },
    { path: "orderdetails", component: OrderdetailsComponent },
    { path: "orderlist", component: OrderlistComponent },
    { path: "admin", component: AdminComponent },
    { path: "restaurant", component : RestaurantComponent},
    { path: "create", component : CreateRestaurantComponent},
    { path: "Notifications", component : NotificationListComponent}
];
