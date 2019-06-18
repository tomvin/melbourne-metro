import { ILocation } from './location.interface';
import { ITripDestination } from './trip-destination.interface';

export interface ITrip {
  id?: string;
  nickname: string;
  startingLocation: ILocation;
  destinations: ITripDestination[];
}
