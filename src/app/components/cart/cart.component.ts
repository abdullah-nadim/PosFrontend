import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartItems = Array.from({ length: 12 }, () => ({
    name: 'Pasta',
    extra1: 'Extra Spicy',
    extra2: 'Extra Cheese',
    quantity: 2,
    total: 4.66
  }));
  
}
