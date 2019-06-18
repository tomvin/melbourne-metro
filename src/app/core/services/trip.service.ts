import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITrip } from 'src/app/_interfaces/trip.interface';
import { ELocationType } from 'src/app/_enums/location-type.enum';
import { EConnectionTimeType } from 'src/app/_enums/connection-time-type.enum';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  private _tripSubject: BehaviorSubject<ITrip[]> = new BehaviorSubject([{
    nickname: 'My Trip!',
    startingLocation: {
      id: '0',
      name: 'Prahran',
      type: ELocationType.Train
    },
    destinations: [{
      id: '0',
      location: {
        id: '1',
        name: 'East Richmond',
        type: ELocationType.Train
      },
      connectionTimeType: EConnectionTimeType.Automatic
    }]
  }]);
  public trips$: Observable<ITrip[]> = this._tripSubject.asObservable();
  public get trips(): ITrip[] { return this._tripSubject.getValue(); }
  public set trips(trips: ITrip[]) { this._tripSubject.next(trips); }

  constructor() { }

  public addTrip(trip: ITrip): ITrip {
    const newTrip: ITrip = {
      ...trip,
      id: '1'
    };
    this.trips.push(newTrip);
    return newTrip;
  }
}
