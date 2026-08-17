import { provideRouter } from '@angular/router';
import { TestBed } from '@angular/core/testing';

import { Destination } from '../../models/destination.model';
import { DestinationCard } from './destination-card';

const MOCK_DESTINATION: Destination = {
  slug: 'bali',
  name: 'Bali',
  country: 'Indonesia',
  description: 'A tropical destination.',
  imageUrl: 'images/destinations/bali.svg',
  bestTimeToVisit: 'April - October',
  estimatedDailyBudget: '$50 - $100',
  popularAttractions: ['Ubud'],
  thingsToDo: ['Visit temples'],
};

describe('DestinationCard', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinationCard],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  function createComponent() {
    const fixture = TestBed.createComponent(DestinationCard);
    fixture.componentRef.setInput('destination', MOCK_DESTINATION);
    fixture.detectChanges();
    return fixture;
  }

  it('renders the destination name and country', () => {
    const fixture = createComponent();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Bali');
    expect(compiled.textContent).toContain('Indonesia');
  });

  it('gives the image meaningful alt text', () => {
    const fixture = createComponent();
    const image = (fixture.nativeElement as HTMLElement).querySelector('img');

    expect(image?.alt).toBe('Bali, Indonesia');
  });

  it('links "View Details" to the destination detail route', () => {
    const fixture = createComponent();
    const link = (fixture.nativeElement as HTMLElement).querySelector('a.card__link');

    expect(link?.getAttribute('href')).toBe('/destinations/bali');
  });
});
