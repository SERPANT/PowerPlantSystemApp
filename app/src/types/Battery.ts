export interface Battery {
  id: string;
  name: string;
  postcode: number;
  wattCapacity: number;
  isReturned: boolean;
  averageWattCapacity: number;
}

export interface PartialBattery extends Partial<Battery> {
  id?: string;
  name?: string;
  postcode?: number;
  wattCapacity?: number;
  isReturned?: boolean;
  averageWattCapacity?: number;
}
