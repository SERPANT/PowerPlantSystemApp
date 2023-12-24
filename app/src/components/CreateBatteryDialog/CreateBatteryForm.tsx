import BatteryField from './BatteryField';

import './CreateBatteryForm.css';

import { PartialBattery } from '../../types/Battery';

interface CreateBatteryFormProps {
  formData: PartialBattery;
  onChange: (name: string, value: string | number | boolean) => void;
  onCreate: () => void;
}

const CreateBatteryForm = (props: CreateBatteryFormProps) => {
  const { formData, onChange, onCreate } = props;

  const numberValidation = (value: string) => {
    try {
      parseInt(value);

      return true;
    } catch {
      return false;
    }
  };

  const onChangeNumberOnlyField = (name: string, value: string) => {
    const isNumber = numberValidation(value);

    if (isNumber) {
      onChange(name, parseInt(value));
    }
  };

  return (
    <div>
      <BatteryField
        name='name'
        title='Name'
        value={formData.name}
        onChange={onChange}
      />
      <BatteryField
        name='postcode'
        title='Post Code'
        value={formData.postcode}
        onChange={onChangeNumberOnlyField}
      />
      <BatteryField
        name='wattCapacity'
        title='Watt Capacity'
        value={formData.wattCapacity}
        onChange={onChangeNumberOnlyField}
      />

      <BatteryField
        disabled={!formData.isReturned}
        name='averageWattCapacity'
        title='Average Watt Capacity'
        value={formData.averageWattCapacity}
        onChange={onChangeNumberOnlyField}
      />

      <div className='battery-field'>
        <label className='battery-label'>Returned </label>
        <input
          type='checkbox'
          checked={formData.isReturned ?? false}
          onClick={(e) => {
            e.stopPropagation();
          }}
          onChange={(e) => {
            onChange('isReturned', e.target.checked);
            onChange('averageWattCapacity', '');
            e.stopPropagation();
          }}
        />
      </div>

      <button className='create-button' onClick={onCreate}>
        Create
      </button>
    </div>
  );
};

export default CreateBatteryForm;
