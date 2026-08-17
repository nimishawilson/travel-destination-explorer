import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { DestinationService } from '../../services/destination.service';

@Component({
  selector: 'app-destination-detail',
  imports: [RouterLink],
  templateUrl: './destination-detail.html',
  styleUrl: './destination-detail.scss',
})
export class DestinationDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly destinationService = inject(DestinationService);

  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug'))),
    { initialValue: null },
  );

  readonly destination = computed(() => {
    const slug = this.slug();
    return slug ? this.destinationService.getDestinationBySlug(slug) : undefined;
  });
}
