import { RouterModule, Routes } from '@angular/router';
import { UserCardComponent } from './user-card/user-card';
import { NgModule } from '@angular/core';


export const routes: Routes = [
  { path: 'user-card', component: UserCardComponent },
  { path: '', redirectTo: '/user-card', pathMatch: 'full' }
];