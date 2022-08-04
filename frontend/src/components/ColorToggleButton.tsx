import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import '../styles/faves.css';
import { Hits } from '../general/types';
import { v4 as uuid } from "uuid";
import { NavLink } from 'react-router-dom';

interface IProps {
  hits: Hits[],
  setHits: React.Dispatch<React.SetStateAction<Hits[]>>,
}

export default function ColorToggleButton({hits, setHits}: IProps) {
  const [faves, setFaves] = React.useState('all_faves');

  const handleChange = async (
    event: React.MouseEvent<HTMLElement>,
    newFave: string
  ) => {
    if(faves === 'all_faves'){
      setHits([
        ...hits
      ]);
      setFaves(newFave);
    } else {
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
        {/* <span className='text-All'>All</span> */}
        <NavLink to='/' className='text-All'>All faves</NavLink>
      </ToggleButton>
      <ToggleButton className='Faves-Rectangle' value='my_faves'>
        {/* <span className='text-My-faves'>My faves</span> */}
        <NavLink to='/my-faves' className='text-My-faves'>My faves</NavLink>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}