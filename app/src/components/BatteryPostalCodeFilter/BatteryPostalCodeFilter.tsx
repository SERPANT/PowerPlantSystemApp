import './BatteryPostalCodeFilter.css';

interface BatteryPostalCodeFilterProps {
  postCodeFilter: {
    from: number | null;
    to: number | null;
  };
  onPostCodeToChange: (value: string) => void;
  onPostCodeFromChange: (value: string) => void;
}

const BatteryPostalCodeFilter = (props: BatteryPostalCodeFilterProps) => {
  const { postCodeFilter, onPostCodeToChange, onPostCodeFromChange } = props;

  return (
    <div className='post-code-filter-container'>
      <span>Postal code Filter</span>
      <div className='filter-input-container'>
        <input
          type='text'
          className='filter-input'
          value={postCodeFilter.to ?? ''}
          onChange={(e) => onPostCodeToChange(e.target.value)}
        />
        <span className='discription-text'>to</span>
        <input
          type='text'
          className='filter-input'
          value={postCodeFilter.from ?? ''}
          onChange={(e) => onPostCodeFromChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default BatteryPostalCodeFilter;
