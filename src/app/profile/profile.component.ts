import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  nom = "";
  prenom = "";
  
  // Additional properties for demonstration of interpolation
  fullName = "";
  greeting = "";
  currentTime = new Date();
  
  constructor() {
    // Update time every second
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

  updateProfile() {
    this.fullName = `${this.prenom} ${this.nom}`;
    this.greeting = this.fullName ? `Bonjour, ${this.fullName}!` : "";
  }

  clearProfile() {
    this.nom = "";
    this.prenom = "";
    this.fullName = "";
    this.greeting = "";
  }

  // Method for testing method interpolation
  getFormattedName(): string {
    return this.nom && this.prenom ? `${this.nom.toUpperCase()}, ${this.prenom}` : "";
  }
}