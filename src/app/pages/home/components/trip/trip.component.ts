import { Component, OnInit, Input } from '@angular/core';
import { ITrip } from 'src/app/_interfaces/trip.interface';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss'],
})
export class TripComponent implements OnInit {
  @Input() trip: ITrip;
  public timeToNext: Date;

  constructor() { }

  ngOnInit() {
    this.timeToNext = new Date();
  }

  public get finalDestinationName(): string {
    return this.trip.destinations[this.trip.destinations.length - 1].location.name;
  }

}
