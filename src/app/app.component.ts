import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  locations = [
    {
      name: 'Location 1',
      subLocations: [
        {
          name: 'Sublocation 1.1',
          subLocations: [],
        },
        {
          name: 'Sublocation 1.2',
          subLocations: [],
        },
      ],
    },
    {
      name: 'Location 2',
      subLocations: [],
    },
    // ... add more locations as needed
  ];

  sortableOptions = {
    animation: 150,
  };
}
