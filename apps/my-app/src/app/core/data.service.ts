import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {}

  getNations() {
    return of([
      {
        value: 0,
        label: ' -- '
      },
      {
        value: 1,
        label: 'Italy'
      },
      {
        value: 2,
        label: 'Germany'
      },
      {
        value: 3,
        label: 'United States'
      }
    ]);
  }

  getCities(nationId: number = 0) {
    return of(
      [
        {
          value: 0,
          label: ' -- ',
          nationId: 0
        },
        {
          value: 1,
          label: 'Bolzano',
          nationId: 1
        },
        {
          value: 2,
          label: 'Rome',
          nationId: 1
        },
        {
          value: 20,
          label: 'Berlin',
          nationId: 2
        },
        {
          value: 21,
          label: 'Munich',
          nationId: 2
        },
        {
          value: 30,
          label: 'San Francisco',
          nationId: 3
        }
      ].filter((entry) => {
        if (nationId) {
          return entry.nationId === nationId;
        } else {
          return true;
        }
      })
    );
  }
}
