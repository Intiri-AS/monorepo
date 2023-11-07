import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  // Countries lists countries supported by the app
  // In the format { name: string, code: string, phonePrefix: string, flagEmoji: string, localName: string }
  private countries = [
    {
      name: 'Norway',
      code: 'NO',
      phonePrefix: '47',
      flagEmoji: '🇳🇴',
      localName: 'Norge',
    },
    {
      name: 'Sweden',
      code: 'SE',
      phonePrefix: '46',
      flagEmoji: '🇸🇪',
      localName: 'Sverige',
    },
    {
      name: 'Denmark',
      code: 'DK',
      phonePrefix: '45',
      flagEmoji: '🇩🇰',
      localName: 'Danmark',
    },
    {
      name: 'United States',
      code: 'US',
      phonePrefix: '1',
      flagEmoji: '🇺🇸',
      localName: 'USA',
    },
    {
      name: 'United Kingdom',
      code: 'GB',
      phonePrefix: '44',
      flagEmoji: '🇬🇧',
      localName: 'UK',
    },
    {
      name: 'Germany',
      code: 'DE',
      phonePrefix: '49',
      flagEmoji: '🇩🇪',
      localName: 'Deutschland',
    },
    {
      name: 'France',
      code: 'FR',
      phonePrefix: '33',
      flagEmoji: '🇫🇷',
      localName: 'France',
    },
    {
      name: 'Spain',
      code: 'ES',
      phonePrefix: '34',
      flagEmoji: '🇪🇸',
      localName: 'España',
    },
    {
      name: 'Italy',
      code: 'IT',
      phonePrefix: '39',
      flagEmoji: '🇮🇹',
      localName: 'Italia',
    },
    {
      name: 'India',
      code: 'IN',
      phonePrefix: '91',
      flagEmoji: '🇮🇳',
      localName: 'India',
    },
    {
      name: 'China',
      code: 'CN',
      phonePrefix: '86',
      flagEmoji: '🇨🇳',
      localName: '中华人民共和国',
    },
    {
      name: 'Croatia',
      code: 'HR',
      phonePrefix: '385',
      flagEmoji: '🇭🇷',
      localName: 'Hrvatska',
    },
    {
      name: 'Ukraine',
      code: 'UA',
      phonePrefix: '380',
      flagEmoji: '🇺🇦',
      localName: 'Україна',
    },
    {
      name: 'Serbia',
      code: 'RS',
      phonePrefix: '381',
      flagEmoji: '🇷🇸',
      localName: 'Србија',
    },
  ];

  constructor() {}

  getCountries() {
    return this.countries;
  }
}
