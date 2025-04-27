import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Restaurant {
  id?: number;
  name: string;
  logo: string;
  domain: string;
  isActive: boolean;
  createdOn?: string;
  modifiedOn?: string;
}

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private apiUrl = `http://localhost:5279/api/RestaurantAPI/Create`;  // Your backend API URL

  constructor(private http: HttpClient) {}

  // Create a new restaurant
  createRestaurant(restaurant: Restaurant): Observable<Restaurant> {
    return this.http.post<Restaurant>(this.apiUrl, restaurant);
  }
}
