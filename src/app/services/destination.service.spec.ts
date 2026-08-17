import { TestBed } from '@angular/core/testing';

import { DestinationService } from './destination.service';

describe('DestinationService', () => {
  let service: DestinationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestinationService);
  });

  it('returns all mock destinations', () => {
    expect(service.getDestinations().length).toBe(6);
  });

  it('returns a defensive copy so mutating the result does not affect later calls', () => {
    const first = service.getDestinations();
    first.pop();

    expect(service.getDestinations().length).toBe(6);
  });

  it('finds a destination by slug', () => {
    const bali = service.getDestinationBySlug('bali');

    expect(bali?.name).toBe('Bali');
    expect(bali?.country).toBe('Indonesia');
  });

  it('returns undefined for an unknown slug', () => {
    expect(service.getDestinationBySlug('does-not-exist')).toBeUndefined();
  });
});
