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
 * @param {searchName} : Search with name
 * @returns Battery[]: Array of batteries
 */
export const fetchAll = async (searchName?: string): Promise<Battery[]> => {
  const searchUrl = `${config.routes.batteries}${
    searchName ? `?searchName=${searchName}` : ''
  }`;

  const { data } = await http.get(searchUrl);

  return data.data as Battery[];
};

const batteryServices = { createBattery, fetchAll };

export default batteryServices;
