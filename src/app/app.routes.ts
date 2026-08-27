import { Routes } from '@angular/router';
import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { DestinationService } from './services/destination.service';

export const destinationTitleResolver: ResolveFn<string> = (route) => {
  const destinationService = inject(DestinationService);

  const slug = route.paramMap.get('slug');

  const destination = destinationService.getDestinationBySlug(slug ?? '');

  return destination
    ? `${destination.name} Travel Guide | Travel Explorer`
    : 'Destination Not Found | Travel Explorer';
};

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    title: 'Travel Explorer'
  },
  {
    path: 'destinations',
    loadComponent: () => import('./pages/destinations/destinations').then((m) => m.Destinations),
     title: 'Explore Destinations | Travel Explorer'
  },
  {
    path: 'destinations/:slug',
    loadComponent: () =>
      import('./pages/destination-detail/destination-detail').then((m) => m.DestinationDetail),
    title: destinationTitleResolver
  },
];
