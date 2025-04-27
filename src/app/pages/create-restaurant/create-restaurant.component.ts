// create-restaurant.component.ts
import { Component } from '@angular/core';
import { RestaurantService } from './restaurant.service';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../NotificationService';

@Component({
  selector: 'app-create-restaurant',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-restaurant.component.html',
  styleUrl: './create-restaurant.component.scss'
})
export class CreateRestaurantComponent {
  newRestaurant = {
    name: '',
    logo: '',
    domain: '',
    isActive: true
  };

  constructor(
    private restaurantService: RestaurantService,
    private notificationService: NotificationService
  ) {}

  createRestaurant() {
    this.restaurantService.createRestaurant(this.newRestaurant).subscribe({
      next: (response) => {
        this.notificationService.sendNotification({
          message: 'Restaurant created successfully!',
          type: 'success',
          duration: 3000
        });
        
        this.newRestaurant = {
          name: '',
          logo: '',
          domain: '',
          isActive: true
        };
      },
      error: (error) => {
        this.notificationService.sendNotification({
          message: 'Failed to create restaurant: ' + 
                   (error.error?.message || error.message || 'Unknown error'),
          type: 'error',
          duration: 5000
        });
      }
    });
  }
}