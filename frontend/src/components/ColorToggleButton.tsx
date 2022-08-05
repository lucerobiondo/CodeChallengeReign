import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import '../styles/faves.css';

interface IProps {
  faves: string,
  setFaves: React.Dispatch<React.SetStateAction<string>>
}

export default function ColorToggleButton({faves, setFaves}: IProps) {

  const handleChange = async (
    event: React.MouseEvent<HTMLElement>,
    newFave: string
  ) => {
      setFaves(newFave);
  };

  return (
    <ToggleButtonGroup
      color='primary'
      value={faves}
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