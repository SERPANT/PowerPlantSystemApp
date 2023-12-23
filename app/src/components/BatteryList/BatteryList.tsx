import React from 'react';

import BatteryItem from '../BatteryItem/BatteryItem';

import { Battery } from '../../types/Battery';

interface BatteryListProps {
  batteries: Battery[];
}

const BatteryList = (props: BatteryListProps) => {
  const { batteries } = props;

  return (
    <ul className='battery-list'>
      {batteries.map((battery) => {
        return (
          <li key={battery.id}>
            <BatteryItem battery={battery} />
          </li>
        );
      })}
    </ul>
  );
};

export default BatteryList;
