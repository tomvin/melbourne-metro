import { Component, OnInit, ViewChild } from '@angular/core';
import { TripService } from 'src/app/core/services/trip.service';
import { IonRippleEffect } from '@ionic/angular';
import { ELocationType } from 'src/app/_enums/location-type.enum';
import { EConnectionTimeType } from 'src/app/_enums/connection-time-type.enum';

@Component({
  selector: 'app-welcome-panel',
  templateUrl: './welcome-panel.component.html',
  styleUrls: ['./welcome-panel.component.scss'],
})
export class WelcomePanelComponent implements OnInit {

  constructor(
    private _trip: TripService
  ) { }

  ngOnInit() {}

  public onAddTripClicked(): void {
    this._trip.addTrip({
      nickname: 'My Trip!',
      startingLocation: {
        id: '0',
        name: 'East Richmond',
        type: ELocationType.Train
      },
      destinations: [{
      id: '0',
        location: {
          id: '1',
          name: 'Prahran',
          type: ELocationType.Train
        },
        connectionTimeType: EConnectionTimeType.Automatic
      }]
    });
  }

}
