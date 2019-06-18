import { ILocation } from './location.interface';
import { EConnectionTimeType } from '../_enums/connection-time-type.enum';

export interface ITripDestination {
  id: string;
  location: ILocation;
  connectionTimeType: EConnectionTimeType;
  manualConnectionTime?: number;  // Only required when connection type is manual
}
