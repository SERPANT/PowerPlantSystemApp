import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';

import './App.css';
import messages from '../lang/en';
import { useBattery } from '../hooks/useBatteries';

import BatterySearchBar from '../components/BatterySearchBar/BatterySearchBar';
import BatteryList from '../components/BatteryList/BatteryList';

function App() {
  const [newBatteryName, setNewBatteryName] = useState<string>('');

  const { batteries, fetchBatteries, createNewBattery, updateBatteryStatus } =
    useBattery();

  console.log({ batteries });

  useEffect(() => {
    fetchBatteries();
  }, [fetchBatteries]);

  return (
    <div className='container'>
      <header>
        <h2 className='title'>{messages.appTitle}</h2>
      </header>

      <div>
        <BatterySearchBar
          batteryName={newBatteryName}
          onClickCreateNew={() => createNewBattery(newBatteryName)}
          onChangeNewBatteryName={(newName) => setNewBatteryName(newName)}
        />

        <BatteryList
          batteries={batteries}
          onChangeBatteryStatus={updateBatteryStatus}
        />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
