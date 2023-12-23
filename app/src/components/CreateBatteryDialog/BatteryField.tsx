interface BatteryFieldProps {
  title: string;
  name: string;
  value?: string | number;
  disabled?: boolean;
  onChange: (name: string, value: string | number) => void;
}

const BatteryField = (props: BatteryFieldProps) => {
  const { title, name, value, disabled, onChange } = props;

  return (
    <div className='battery-field'>
      <label> {title}</label>
      <br />
      <input
        type='text'
        name={name}
        disabled={disabled}
        onChange={(e) => onChange(name, e.target.value)}
        className='battery-input'
        value={value ?? ''}
      />
    </div>
  );
};

export default BatteryField;
