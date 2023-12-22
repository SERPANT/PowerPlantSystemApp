import { useCallback, useMemo, useState } from 'react';

import { Battery } from '../types/Battery';
import batteryServices from '../services/batteries';

import handleError from '../utils/errorHandler';

/**
 * Hooks for all the basic operation that can be performed on a battery
 *
 * @returns Object of all the functions that can be performed on a battery
 */
export const useBattery = () => {
  const [batteries, setBatteries] = useState<Battery[]>([]);

  /**
   * Send a request to fetch all the battereis and store them in a state
   */
  const fetchBatteries = useCallback(async () => {
    try {
      const batteries = await batteryServices.fetchAll();

      setBatteries(batteries);
    } catch (err) {
      handleError(err);
    }
  }, []);

  return useMemo(() => {
    /**
     * Update battery status
     *
     * @param batteryId: Id of the battery record
     * @param isComplete: Boolean value representing if a battery is returned or not
     */
    const updateBatteryStatus = async (
      batteryId: string,
      isReturned: boolean
    ) => {
      try {
        await batteryServices.updateStatus(batteryId, isReturned);

        fetchBatteries();
      } catch (err) {
        handleError(err);
      }
    };

    /**
     * Send request to create a new battery record
     *
     * @param newBatteryName: Name of the battery to be created
     */
    const createNewBattery = async (newBatteryName: string) => {
      try {
        await batteryServices.createBattery({
          name: newBatteryName,
        });

        fetchBatteries();
      } catch (err) {
        handleError(err);
      }
    };

    return {
      batteries,
      fetchBatteries,
      createNewBattery,
      updateBatteryStatus,
    };
  }, [batteries, fetchBatteries]);
};
