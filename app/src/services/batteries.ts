import { PartialBattery, Battery } from '../types/Battery';

import http from '../utils/http';
import config from '../config';
import { buildQueryString } from '../utils/queryBuilder';

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
 * @param {postCodeFilter} Object containing from and to
 *
 * @returns Battery[]: Array of batteries
 */
export const fetchAll = async (
  searchName?: string,
  postCodeFilter?: { from: number | null; to: number | null }
): Promise<Battery[]> => {
  let queryUrl = buildQueryString('', 'searchName', searchName);

  if (postCodeFilter) {
    queryUrl = buildQueryString(queryUrl, 'postCodeFrom', postCodeFilter.from);
    queryUrl = buildQueryString(queryUrl, 'postCodeTo', postCodeFilter.to);
  }

  const { data } = await http.get(
    `${config.routes.batteries}${queryUrl ? `?${queryUrl}` : ''}`
  );

  return data.data as Battery[];
};

const batteryServices = { createBattery, fetchAll };

export default batteryServices;
