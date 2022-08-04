import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { menuOptions } from '../general/utils';
import '../styles/home.css';
import '../styles/select.css';

interface IProps {
    news: string,
    setNews: React.Dispatch<React.SetStateAction<string>>
}

const SelectControl = ({ news, setNews }: IProps) => {

    const handleChange = (event: any) => {
        setNews(event.target.value);
    };

    return (
        <>
            <FormControl className="Rectangle-26-Copy-23">
                <InputLabel id="demo-simple-select-label">Select your news</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={news}
                    label="Select your news"
                    onChange={handleChange}
                >
                    {
                        menuOptions.map((option) =>
                            <MenuItem key={option.name} value={option.name}>
                                <Box className="Rectangle">
                                    <Box>
                                        <img src={option.img} alt="frameworks" width="24px" height="24px" />
                                    </Box>
                                    <Box className={option.class}>
                                        {option.name}
                                    </Box>
                                </Box>
                            </MenuItem>
                        )
                    }
                </Select>
            </FormControl>
        </>
    );
};

export default SelectControl;