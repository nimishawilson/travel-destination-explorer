import { Component, inject } from '@angular/core';

import { DestinationCard } from '../../components/destination-card/destination-card';
import { DestinationService } from '../../services/destination.service';

@Component({
  selector: 'app-destinations',
  imports: [DestinationCard],
  templateUrl: './destinations.html',
  styleUrl: './destinations.scss',
})
export class Destinations {
  private readonly destinationService = inject(DestinationService);

  readonly destinations = this.destinationService.getDestinations();
}
