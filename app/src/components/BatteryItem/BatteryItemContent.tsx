import React from 'react';

import { Battery } from '../../types/Battery';

interface BatteryItemContentProps {
  battery: Battery;
}

export const BatteryItemContent = (props: BatteryItemContentProps) => {
  const { battery } = props;

  return (
    <div className='battery-item-content'>
      <div>
        <label className='battery-label'>Name: {battery.name}</label>
      </div>
      <div>
        <label className='battery-label'>Post Code : {battery.postcode}</label>
      </div>
    </div>
  );
};
