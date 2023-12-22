export interface Battery {
  id: string;
  name: string;
  postcode: number;
  wattCapacity: number;
  isReturned: boolean;
  AverageWattCapacity: number;
}

export interface PartialBattery extends Partial<Battery> {
  id?: string;
  name: string;
  postcode?: number;
  wattCapacity?: number;
  isReturned?: boolean;
  AverageWattCapacity?: number;
}
