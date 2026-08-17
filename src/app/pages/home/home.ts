import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { DestinationCard } from '../../components/destination-card/destination-card';
import { DestinationService } from '../../services/destination.service';

const FEATURED_COUNT = 4;

@Component({
  selector: 'app-home',
  imports: [RouterLink, DestinationCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly destinationService = inject(DestinationService);

  readonly featuredDestinations = this.destinationService
    .getDestinations()
    .slice(0, FEATURED_COUNT);
}
