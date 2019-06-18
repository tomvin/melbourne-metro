import { ELocationType } from '../_enums/location-type.enum';

export interface ILocation {
  id: string;
  name: string;
  type: ELocationType;
}
