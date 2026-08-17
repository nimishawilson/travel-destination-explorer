import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Destination } from '../../models/destination.model';

@Component({
  selector: 'app-destination-card',
  imports: [RouterLink],
  templateUrl: './destination-card.html',
  styleUrl: './destination-card.scss',
})
export class DestinationCard {
  readonly destination = input.required<Destination>();
}
