import { Routes } from '@angular/router';
import { Home } from './home/home';
export const routes: Routes = [
  { path: '', pathMatch: 'full', component: Home },
  { path: 'home', loadComponent: () => import('./home/home').then(m => m.Home) },
  { path: 'about', loadComponent: () => import('./about/about').then(m => m.About) },
  { path: 'thank-you', loadComponent: () => import('./thank-you/thank-you').then(m => m.ThankYou) },
  { path:'newsletter' , loadComponent: () => import('./newsletter/newsletter').then(m => m.Newsletter) }
];
