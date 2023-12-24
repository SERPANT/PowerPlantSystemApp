import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';

import './App.css';
import messages from '../lang/en';
import { useBattery } from '../hooks/useBatteries';

import BatterySearchBar from '../components/BatterySearchBar/BatterySearchBar';
import BatteryList from '../components/BatteryList/BatteryList';
import CreateBatteryDialog from '../components/CreateBatteryDialog/CreateBatteryDialog';

import { PartialBattery } from '../types/Battery';
import BatteryPostalCodeFilter from '../components/BatteryPostalCodeFilter/BatteryPostalCodeFilter';

function App() {
  const { batteries, fetchBatteries, createNewBattery } = useBattery();

  const [iscreateNewModalOpen, setOpenModalStatus] = useState<boolean>(false);
  const [searchBatteryName, setsearchBatteryName] = useState<string>('');
  const [createBatteryData, setCreateBatteryData] = useState<PartialBattery>(
    {}
  );
  const [postCodeFilter, setPostCodeFilter] = useState<{
    from: number | null;
    to: number | null;
  }>({
    from: null,
    to: null,
  });

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
    setOpenModalStatus(false);
  };

  const onPostCodeToChange = (value: string) => {
    if (!value) {
      setPostCodeFilter((prevState) => ({ ...prevState, to: null }));
      return;
    }

    try {
      const toValue = parseInt(value);

      setPostCodeFilter((prevState) => ({ ...prevState, to: toValue }));
    } catch {
      //show notification

      console.log('not an integer');
    }
  };

  const onPostCodeFromChange = (value: string) => {
    if (!value) {
      setPostCodeFilter((prevState) => ({ ...prevState, from: null }));
      return;
    }

    try {
      const toValue = parseInt(value);
      setPostCodeFilter((prevState) => ({ ...prevState, from: toValue }));
    } catch {
      //show notification

      console.log('not an integer');
    }
  };

  return (
    <div className='container'>
      <header>
        <h2 className='title'>{messages.appTitle}</h2>
      </header>

      <div>
        <BatterySearchBar
          batteryName={searchBatteryName}
          onClickCreateNew={() => setOpenModalStatus(true)}
          onChangeNewBatteryName={(newName) => {
            setsearchBatteryName(newName);
          }}
        />
        <BatteryPostalCodeFilter
          postCodeFilter={postCodeFilter}
          onPostCodeToChange={onPostCodeToChange}
          onPostCodeFromChange={onPostCodeFromChange}
        />

        <BatteryList batteries={batteries} />
      </div>
      <ToastContainer />

      <CreateBatteryDialog
        onCreate={createNewBatteryRecord}
        formData={createBatteryData}
        open={iscreateNewModalOpen}
        onChange={onFormDataChange}
        onClose={() => setOpenModalStatus(false)}
      />
    </div>
  );
}

export default App;
