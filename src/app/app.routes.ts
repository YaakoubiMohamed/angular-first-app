import { Routes } from '@angular/router';
import { ImcComponent } from './imc/imc.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: 'imc', component: ImcComponent }
];
