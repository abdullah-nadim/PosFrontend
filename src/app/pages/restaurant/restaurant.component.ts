import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


export interface Restaurant {
  id: number;
  name: string;
  location: string;
}

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.scss'
})
export class RestaurantComponent implements OnInit {
  restaurants: Restaurant[] = [];
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadRestaurants();
  }

  loadRestaurants(): void {
    this.http.get<Restaurant[]>('http://localhost:5279/api/RestaurantAPI/Get')
      .subscribe({
        next: (data) => {
          this.restaurants = data;
        },
        error: (err) => {
          console.error('Error fetching restaurants', err);
          this.errorMessage = 'Failed to load restaurants.';
        }
      });
  }
}
