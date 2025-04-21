import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-orderlist',
  standalone: true,
  imports: [NgFor],
  templateUrl: './orderlist.component.html',
  styleUrl: './orderlist.component.scss'
})
export class OrderlistComponent {
  orders = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: 'Pasta',
    date: '2025-04-17 14:30:00',
    payment: 'Cash On Delivery',
    amount: '$4.66',
    type: 'Dine In'
  }));

  rowsPerPage = 10;
  pageNumbers = [1, 2, 3];

  goToDetails(orderId: number) {
    // Replace with actual navigation
    console.log('Navigating to OrderDetails for Order No:', orderId);
  }
}
