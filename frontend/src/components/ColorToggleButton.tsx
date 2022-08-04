import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import '../styles/faves.css';

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton className='Faves-Rectangle' value='all_faves'>
        <span className='text-All'>All</span>
      </ToggleButton>
      <ToggleButton className='Faves-Rectangle' value='my_faves'>
        <span className='text-My-faves'>My faves</span>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}