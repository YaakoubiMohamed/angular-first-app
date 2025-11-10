import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-imc',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './imc.component.html',
  styleUrl: './imc.component.css'
})
export class ImcComponent {
  taille!: number;
  poids!: number;
  imc!: number;
  errormessage = "";
  interpretation = "";

  calculerIMC() {
    if (this.taille <= 0 || this.poids <= 0) {
      this.errormessage = "La taille et le poids doit être un nombre positif";
      return;
    } 
    else {
      this.errormessage = ""; // Clear error message when calculation is valid
      this.imc = parseFloat((this.poids / (this.taille * this.taille)).toFixed(2));

      if (this.imc < 18.5) {
        this.interpretation = "Vous êtes en insuffisance pondérale";
        return;
      }
      else if (this.imc >= 18.5 && this.imc < 24.9) {
        this.interpretation = "Vous avez un poids normal";
        return;
      }
      else if (this.imc >= 25 && this.imc < 29.9) {
        this.interpretation = "Vous êtes en surpoids";
        return;
      }
      else {
        this.interpretation = "Vous êtes en obésité modérée";
        return;
      }
    }
  }
}