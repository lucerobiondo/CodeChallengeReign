import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { menuOptions, url } from '../general/utils';
import '../styles/home.css';
import '../styles/select.css';
import { Data } from '../general/types';
import axios from 'axios';
import NewsDescription from './NewsDescription';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function HomeView() {
    const [news, setNews] = React.useState('');
    const [allFaves, setAllFaves] = useState<Data>();
    const [page, setPage] = React.useState(1);

    const handleChangePagination = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    const handleChange = (event: SelectChangeEvent) => {
        setNews(event.target.value as string);
    };

    useEffect(() => {
        fetchAllFaves()
    }, [news, page]);

    const fetchAllFaves = async () => {
        const response = await axios(url(news, page))
        console.log(response)
        setAllFaves(response.data)
    }

    return (
        <>
            <Box className='Select--Home-view'>
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
                            menuOptions.map((option, _i) =>
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
            </Box>
            {
                allFaves?.hits?.map((hit) => {
                    return (
                        <Box className="Description--Home-view">
                            <NewsDescription hit={hit} />
                        </Box>
                    )
                }
                )
            }
            <Box className="Pagination">
                <Stack spacing={2}>
                    <Pagination
                        count={allFaves?.hitsPerPage}
                        page={page}
                        onChange={handleChangePagination} />
                </Stack>
            </Box>
        </>
    );
}
