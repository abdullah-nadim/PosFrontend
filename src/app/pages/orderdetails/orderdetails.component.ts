import { Component } from '@angular/core';
import { OrdersummaryComponent } from "../../components/ordersummary/ordersummary.component";
import { OrderitemlistComponent } from "../../components/orderitemlist/orderitemlist.component";

@Component({
  selector: 'app-orderdetails',
  standalone: true,
  imports: [OrdersummaryComponent,  OrderitemlistComponent],
  templateUrl: './orderdetails.component.html',
  styleUrl: './orderdetails.component.scss'
})
export class OrderdetailsComponent {

}
