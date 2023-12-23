import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';

import './App.css';
import messages from '../lang/en';
import { useBattery } from '../hooks/useBatteries';

import BatterySearchBar from '../components/BatterySearchBar/BatterySearchBar';
import BatteryList from '../components/BatteryList/BatteryList';
import CreateBatteryDialog from '../components/CreateBatteryDialog/CreateBatteryDialog';

import { PartialBattery } from '../types/Battery';

function App() {
  const [iscreateNewModalOpen, setCreateNewModalStatus] =
    useState<boolean>(true);
  const [newBatteryName, setNewBatteryName] = useState<string>('');
  const [createBatteryData, setCreateBatteryData] = useState<PartialBattery>(
    {}
  );

  console.log({ createBatteryData });

  const onFormDataChange = (name: string, value: string | number | boolean) => {
    setCreateBatteryData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { batteries, fetchBatteries, createNewBattery } = useBattery();

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
          onClickCreateNew={() => setCreateNewModalStatus(true)}
          onChangeNewBatteryName={(newName) => setNewBatteryName(newName)}
        />

        <BatteryList batteries={batteries} />
      </div>
      <ToastContainer />

      <CreateBatteryDialog
        onCreate={() => createNewBattery(createBatteryData)}
        formData={createBatteryData}
        open={iscreateNewModalOpen}
        onChange={onFormDataChange}
        onClose={() => setCreateNewModalStatus(false)}
      />
    </div>
  );
}

export default App;
