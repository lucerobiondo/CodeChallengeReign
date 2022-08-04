import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import ColorToggleButton from '../components/ColorToggleButton';
import { Hits, Data } from '../general/types';
import '../styles/home.css';
import '../styles/select.css';
import axios from 'axios';
import { url } from '../general/utils';
import NewsDescription from '../components/NewsDescription';
import PaginationControl from '../components/PaginationControl';
import SelectControl from '../components/SelectControl';

const Home = () => {

    const [hits, setHits] = useState<Hits[]>([]);
    const [news, setNews] = useState('');
    const [allFaves, setAllFaves] = useState<Data>();
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchAllFaves();
    }, [news, page]);

    const fetchAllFaves = async () => {
        const response = await axios(url(news, page));
        console.log(response);
        setAllFaves(response.data);
    };

    return (
        <>
            <Box className="Rectangle-2-Copy">
                <h1 className="HACKER-NEWS Text-Style">
                    HACKER NEWS
                </h1>
            </Box>
            <Box className="Front-End-Test---Home-view">
                <Box className='ColorToggleButton--Home-view'>
                    <ColorToggleButton hits={hits} setHits={setHits} />
                </Box>
                <Box className='Select--Home-view'>
                    <SelectControl news={news} setNews={setNews} />
                </Box>
                <Box className="Description--Home-view">
                    {
                        allFaves?.hits?.map((hit) => {
                            return (

                                <NewsDescription
                                    key={hit._id} hit={hit}
                                />

                            );
                        }
                        )
                    }
                </Box>
            </Box>
            <Box className="Pagination">
                <PaginationControl nbHits={allFaves?.nbHits} page={page} setPage={setPage} />
            </Box>
        </>
    );
};

export default Home;