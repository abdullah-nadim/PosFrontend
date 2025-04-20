import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgFor],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  foodItems = [
    { name: 'Pasta', image: '../Assets/Images/food.jpg', price: 2.33 },
    { name: 'Burger', image: '../Assets/Images/burger.jpg', price: 3.50 },
    // ...
  ];
}
