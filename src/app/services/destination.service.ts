import { Injectable } from '@angular/core';

import { Destination } from '../models/destination.model';

const DESTINATIONS: Destination[] = [
  {
    slug: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    description:
      'A tropical destination known for beaches, temples, rice terraces and vibrant culture.',
    imageUrl: 'images/destinations/bali.svg',
    bestTimeToVisit: 'April - October',
    estimatedDailyBudget: '$50 - $100',
    popularAttractions: ['Ubud', 'Seminyak', 'Uluwatu', 'Nusa Penida'],
    thingsToDo: [
      'Visit temples',
      'Explore rice terraces',
      'Relax at beaches',
      'Experience local cuisine',
    ],
  },
  {
    slug: 'kerala',
    name: 'Kerala',
    country: 'India',
    description:
      "India's tranquil backwater state, famous for houseboats, tea plantations and Ayurvedic wellness.",
    imageUrl: 'images/destinations/kerala.svg',
    bestTimeToVisit: 'September - March',
    estimatedDailyBudget: '$30 - $70',
    popularAttractions: [
      'Alleppey Backwaters',
      'Munnar',
      'Fort Kochi',
      'Periyar Wildlife Sanctuary',
    ],
    thingsToDo: [
      'Take a houseboat cruise',
      'Visit a tea plantation',
      'Enjoy an Ayurvedic spa',
      'Go on a wildlife safari',
    ],
  },
  {
    slug: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    description:
      "Japan's dazzling capital, blending ultramodern skyscrapers with historic temples and shrines.",
    imageUrl: 'images/destinations/tokyo.svg',
    bestTimeToVisit: 'March - May, September - November',
    estimatedDailyBudget: '$80 - $150',
    popularAttractions: ['Shibuya Crossing', 'Senso-ji Temple', 'Shinjuku', 'Akihabara'],
    thingsToDo: [
      'Try local street food',
      'Visit temples and shrines',
      'Explore the city neighborhoods',
      'Take a day trip to Mt. Fuji',
    ],
  },
  {
    slug: 'paris',
    name: 'Paris',
    country: 'France',
    description:
      'The City of Light, celebrated for iconic landmarks, world-class museums and café culture.',
    imageUrl: 'images/destinations/paris.svg',
    bestTimeToVisit: 'April - June, September - October',
    estimatedDailyBudget: '$90 - $160',
    popularAttractions: ['Eiffel Tower', 'Louvre Museum', 'Montmartre', 'Notre-Dame'],
    thingsToDo: [
      'Go museum hopping',
      'Enjoy the café culture',
      'Walk along the Seine',
      'Take a day trip to Versailles',
    ],
  },
  {
    slug: 'santorini',
    name: 'Santorini',
    country: 'Greece',
    description:
      'A dramatic volcanic island in the Aegean Sea, known for whitewashed villages and stunning sunsets.',
    imageUrl: 'images/destinations/santorini.svg',
    bestTimeToVisit: 'May - September',
    estimatedDailyBudget: '$70 - $130',
    popularAttractions: ['Oia', 'Fira', 'Red Beach', 'Akrotiri Ruins'],
    thingsToDo: [
      'Watch the sunset in Oia',
      'Go wine tasting',
      'Take a boat tour',
      'Explore the villages',
    ],
  },
  {
    slug: 'rome',
    name: 'Rome',
    country: 'Italy',
    description:
      'The Eternal City, home to millennia of history, ancient ruins and world-renowned cuisine.',
    imageUrl: 'images/destinations/rome.svg',
    bestTimeToVisit: 'April - June, September - October',
    estimatedDailyBudget: '$70 - $120',
    popularAttractions: ['Colosseum', 'Vatican City', 'Trevi Fountain', 'Roman Forum'],
    thingsToDo: [
      'Take a historic walking tour',
      'Visit the Vatican Museums',
      'Try authentic gelato',
      'Explore the piazzas',
    ],
  },
];

@Injectable({ providedIn: 'root' })
export class DestinationService {
  getDestinations(): Destination[] {
    return [...DESTINATIONS];
  }

  getDestinationBySlug(slug: string): Destination | undefined {
    return DESTINATIONS.find((destination) => destination.slug === slug);
  }
}
