import { Routes } from '@angular/router';
import { OrderplaceComponent } from './pages/orderplace/orderplace.component';
import { OrderposComponent } from './pages/orderpos/orderpos.component';
import { TerminalloginComponent } from './pages/terminallogin/terminallogin.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    { path: "orderplace", component: OrderplaceComponent },
    { path: "orderpos", component:OrderposComponent},
    { path: "terminallogin", component: TerminalloginComponent },
    { path: "login", component: LoginComponent }
];
