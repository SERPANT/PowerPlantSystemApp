import React from 'react';

import { Battery } from '../../types/Battery';

import './BatteryItem.css';
import { Accordian } from '../../common-ui/accordian/Accordian';
import { BatteryItemContent } from './BatteryItemContent';

interface BatteryItemProps {
  battery: Battery;
}

export const BatteryItem = (props: BatteryItemProps) => {
  const { battery } = props;

  return (
    <Accordian content={<BatteryItemContent battery={battery} />}>
      <div className='battery-details'>
        <div className='battery-detail'>
          Watt Capacity: {battery.wattCapacity}
        </div>
        <div className='battery-detail'>
          Average Watt Capacity: {battery.averageWattCapacity}
        </div>
        <div className='battery-detail'>
          <label>Returned: {battery.isReturned ? 'Yes' : 'No'} </label>
        </div>
      </div>
    </Accordian>
  );
};

export default BatteryItem;
