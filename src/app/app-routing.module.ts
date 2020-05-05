import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'estadistica',
    component: StatisticsComponent
  },
  {
    path: 'reseña',
    component: ReviewsComponent
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
