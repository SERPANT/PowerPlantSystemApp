import React from 'react';

import './BatterySearchBar.css';

interface BatterySearchBarProps {
  batteryName: string;
  onChangeNewBatteryName: (newBatteryName: string) => void;
  onClickCreateNew: () => void;
}

export const BatterySearchBar = (props: BatterySearchBarProps) => {
  const { batteryName, onChangeNewBatteryName, onClickCreateNew } = props;

  return (
    <div>
      <input
        type='text'
        className='battery-name-input'
        data-external-id='search-input'
        placeholder='Search Battery'
        value={batteryName}
        onChange={(event) => onChangeNewBatteryName(event.target.value)}
      />
      <button
        data-external-id='create-new-button'
        className='battery-create-button'
        onClick={onClickCreateNew}
      >
        Create New
      </button>
    </div>
  );
};

export default BatterySearchBar;
