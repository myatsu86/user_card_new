import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

interface User {
  name: string;
  email: string;
  role: string;
  joined: string;
  avatar: string;
}

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.html',
  styleUrls: ['./user-card.scss'],
  imports: [CommonModule]
})
export class UserCardComponent {

  showDetails = false;

  user: User = {
    name: 'Sarah Tan',
    email: 'sarah.tan@example.com',
    role: 'Project Manager',
    joined: '2021-03-12',
    avatar: 'https://i.pravatar.cc/100?img=47'
  };

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}
