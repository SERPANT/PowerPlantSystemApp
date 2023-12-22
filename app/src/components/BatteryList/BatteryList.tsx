import React from 'react';

import BatteryItem from '../BatteryItem/BatteryItem';

import { Battery } from '../../types/Battery';

interface BatteryListProps {
  batteries: Battery[];
  onChangeBatteryStatus: (batteryId: string, isChecked: boolean) => void;
}

const BatteryList = (props: BatteryListProps) => {
  const { batteries, onChangeBatteryStatus } = props;

  return (
    <ul className='battery-list'>
      {batteries.map((battery) => {
        return (
          <li key={battery.id}>
            <BatteryItem
              battery={battery}
              onChangeBatteryStatus={onChangeBatteryStatus}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default BatteryList;
