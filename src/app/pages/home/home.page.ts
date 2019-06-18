import { Component, OnInit } from '@angular/core';
import { ITrip } from 'src/app/_interfaces/trip.interface';
import { Observable } from 'rxjs';
import { TripService } from 'src/app/core/services/trip.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
  animateChild
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    trigger('item', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),  // initial
        animate('.4s cubic-bezier(.8, -0.6, 0.2, 1.5)', 
          style({ transform: 'scale(1)', opacity: 1 }))  // final
      ]),
      transition(':leave', [
        style({ transform: 'scale(1)', opacity: 1, height: '*' }),
        animate('.4s cubic-bezier(.8, -0.6, 0.2, 1.5)', 
         style({ 
           transform: 'scale(0.5)', opacity: 0, 
           height: '0px', margin: '0px' 
         })) 
      ])
    ]),
    trigger('list', [
      transition(':enter', [
        query('@item', stagger(250, animateChild()))
      ]),
    ])
  ]
})
export class HomePage implements OnInit {
  public trips$: Observable<ITrip[]>;

  constructor(
    private _trip: TripService
  ) {}

  ngOnInit() {
    this.trips$ = this._trip.trips$;
  }
}
