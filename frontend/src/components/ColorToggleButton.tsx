import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import '../styles/faves.css';
import { Hits } from '../general/types';
import { v4 as uuid } from "uuid";

interface IProps {
  hits: Hits[],
  setHits: React.Dispatch<React.SetStateAction<Hits[]>>
}

export default function ColorToggleButton({hits, setHits}: IProps) {
  const [faves, setFaves] = React.useState('all_faves');

  const handleChange = async (
    event: React.MouseEvent<HTMLElement>,
    newFave: string
  ) => {
    if(faves){
      setHits([
        ...hits
      ]);
      setFaves(newFave);
    }
  };

  return (
    <ToggleButtonGroup
      color="primary"
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