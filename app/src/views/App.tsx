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
  const { batteries, fetchBatteries, createNewBattery } = useBattery();

  const [iscreateNewModalOpen, setCreateNewModalStatus] =
    useState<boolean>(false);
  const [searchBatteryName, setsearchBatteryName] = useState<string>('');
  const [createBatteryData, setCreateBatteryData] = useState<PartialBattery>(
    {}
  );

  useEffect(() => {
    fetchBatteries(searchBatteryName);
  }, [searchBatteryName, fetchBatteries]);

  const onFormDataChange = (name: string, value: string | number | boolean) => {
    setCreateBatteryData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const createNewBatteryRecord = () => {
    createNewBattery(createBatteryData);
    setCreateNewModalStatus(false);
  };

  return (
    <div className='container'>
      <header>
        <h2 className='title'>{messages.appTitle}</h2>
      </header>

      <div>
        <BatterySearchBar
          batteryName={searchBatteryName}
          onClickCreateNew={() => setCreateNewModalStatus(true)}
          onChangeNewBatteryName={(newName) => {
            setsearchBatteryName(newName);
          }}
        />

        <BatteryList batteries={batteries} />
      </div>
      <ToastContainer />

      <CreateBatteryDialog
        onCreate={createNewBatteryRecord}
        formData={createBatteryData}
        open={iscreateNewModalOpen}
        onChange={onFormDataChange}
        onClose={() => setCreateNewModalStatus(false)}
      />
    </div>
  );
}

export default App;
