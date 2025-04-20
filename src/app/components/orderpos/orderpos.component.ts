import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-orderpos',
  standalone: true,
  imports: [NgIf, NgFor,RouterModule],
  templateUrl: './orderpos.component.html',
  styleUrl: './orderpos.component.scss'
})
export class OrderposComponent {
  onHoldOrders = [
    { number: 'O1123', type: 'Dine In', details: 'Table #04', amount: 9999 },
    { number: 'O1123', type: 'Dine In', details: 'Table #04', amount: 9999 },
    { number: 'O1123', type: 'Dine In', details: 'Table #04', amount: 9999 }
  ];
  
  actionOrders = Array.from({ length: 15 }, (_, i) => ({
    number: 'O1123',
    time: '15 mins ago',
    type: 'Dine In',
    details: 'Table #04',
    amount: 9999
  }));
  
}
