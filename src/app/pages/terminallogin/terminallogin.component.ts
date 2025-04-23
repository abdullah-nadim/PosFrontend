import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-terminallogin',
  standalone: true,
  imports: [NgFor,CommonModule, FormsModule],
  templateUrl: './terminallogin.component.html',
  styleUrl: './terminallogin.component.scss'
})
export class TerminalloginComponent {
  users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alex Johnson' },
  ];

  selectedUser: number | null = null;
  pin: string = '';
  pinDisplay: string[] = ['', '', '', ''];
  digits: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor(private router: Router) {}

  enterDigit(digit: number): void {
    if (this.pin.length < 4) {
      this.pin += digit;
      this.pinDisplay[this.pin.length - 1] = '*';
    }
  }

  clearPin(): void {
    this.pin = '';
    this.pinDisplay = ['', '', '', ''];
  }

  signIn(): void {
    if (this.selectedUser && this.pin.length === 4) {
      this.router.navigate(['/orderpos']);
    } else {
      alert('Please select a user and enter a 4-digit PIN');
    }
  }
}
