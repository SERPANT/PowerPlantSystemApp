import { PartialBattery, Battery } from '../types/Battery';

import http from '../utils/http';
import config from '../config';

/**
 * Send request for creating a new Battery record
 *
 * @param battery: Battery object
 */
export const createBattery = async (battery: PartialBattery) => {
  const url = `${config.routes.batteries}`;

  return http.post(url, battery);
};

/**
 * Fetch all batteries that have been created
 *
 * @returns Battery[]: Array of batteries
 */
export const fetchAll = async (): Promise<Battery[]> => {
  const { data } = await http.get(config.routes.batteries);

  return data.data as Battery[];
};

/**
 * Update status of a battery record returned or not
 *
 * @param batteryId: Id of a battery
 * @param isReturned: new value to be assigned
 */
export const updateStatus = async (batteryId: string, isReturned: boolean) => {
  const url = `${config.routes.batteries}/${batteryId}`;

  return http.patch(url, { isReturned });
};

const batteryServices = { createBattery, fetchAll, updateStatus };

export default batteryServices;
