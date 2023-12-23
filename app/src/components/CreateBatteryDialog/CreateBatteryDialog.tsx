import React from 'react';

import Modal from '../../common-ui/modal/Modal';
import CreateBatteryForm from './CreateBatteryForm';

import { PartialBattery } from '../../types/Battery';

interface CreateBatteryDialogProps {
  open: boolean;
  formData: PartialBattery;
  onClose: () => void;
  onChange: (name: string, value: string | number | boolean) => void;
  onCreate: () => void;
}

const CreateBatteryDialog = (props: CreateBatteryDialogProps) => {
  const { open, formData, onChange, onClose, onCreate } = props;

  return (
    <Modal
      title='Create new Battery'
      open={open}
      onClose={onClose}
      modalContent={
        <CreateBatteryForm
          onCreate={onCreate}
          onChange={onChange}
          formData={formData}
        />
      }
    />
  );
};

export default CreateBatteryDialog;
