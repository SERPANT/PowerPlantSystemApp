import React from 'react';

import { Battery } from '../../types/Battery';

interface BatteryItemContentProps {
  battery: Battery;
  onChangeBatteryStatus: (batteryId: string, isChecked: boolean) => void;
}

export const BatteryItemContent = (props: BatteryItemContentProps) => {
  const { battery, onChangeBatteryStatus } = props;

  return (
    <div className='battery-item-content'>
      <div>
        <label className='battery-label'>{battery.name}</label>
      </div>

      <div className='battery-return'>
        <label className='battery-label'>Returned </label>
        <input
          type='checkbox'
          id={battery.id}
          value={battery.id}
          checked={battery.isReturned}
          onClick={(e) => {
            e.stopPropagation();
          }}
          onChange={(event) => {
            onChangeBatteryStatus(battery.id, event.target.checked);
            event.stopPropagation();
          }}
        />
      </div>
    </div>
  );
};
