import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-orderitemlist',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './orderitemlist.component.html',
  styleUrl: './orderitemlist.component.scss'
})
export class OrderitemlistComponent {
  orders = Array.from({ length: 8 }, () => ({
    title: 'Chicken Burger',
    qty: 2,
    price: 29.99,
    spiceLevels: ['less', 'regular'],
    addons: ['extra cheese', 'bacon']
  }));
}
