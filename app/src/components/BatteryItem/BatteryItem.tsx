import React from 'react';

import { Battery } from '../../types/Battery';

import './BatteryItem.css';
import { Accordian } from '../../common-ui/accordian/Accordian';
import { BatteryItemContent } from './BatteryItemContent';

interface BatteryItemProps {
  battery: Battery;
  onChangeBatteryStatus: (batteryId: string, isChecked: boolean) => void;
}

export const BatteryItem = (props: BatteryItemProps) => {
  const { battery, onChangeBatteryStatus } = props;

  return (
    <Accordian
      content={
        <BatteryItemContent
          battery={battery}
          onChangeBatteryStatus={onChangeBatteryStatus}
        />
      }
    >
      hello
    </Accordian>
  );
};

export default BatteryItem;
