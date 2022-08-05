import React, { useState } from 'react';
import { Box } from '@mui/material';
import '../../styles/description.css';
import time from '../Images/iconmonstr-time-2@3x.png';
import iconUnlike from '../Images/iconmonstr-favorite-2@3x.png';
import iconLike from '../Images/iconmonstr-favorite-3@3x.png';
import { Hits } from '../../general/types';

interface Props {
    hit: Hits,
    dateAuthor: string,
    like: boolean,
    setLike: React.Dispatch<React.SetStateAction<boolean>>
}

const DescriptionCard = ({ hit, dateAuthor, like, setLike }: Props) => {

    const handleLike = () => {
        setLike(true);
    };
    const handleUnlike = () => {
        setLike(false);
    };

    console.log('like in description card :' , like);

    return (
        <>
            <Box className='Rectangle-Patern'>
                <Box className='Reactangle-1'>
                    <Box display='flex' height='20px'>
                        <img src={time} alt='icon-Time' className='iconmonstr-time-2' />
                        <p className='-hours-ago-by-autho'>
                            {dateAuthor} by author
                        </p>
                    </Box>
                    <Box display='flex' height='auto' paddingBottom='10px'>
                        <p className='Event-driven-state-m'>
                            {hit.story_title}
                        </p>
                    </Box>
                </Box>
                <Box className='Rectangle-favorite'>
                    {
                        like
                            ? <img src={iconLike} alt='favorite'
                                className='iconmonstr-favorite'
                                onClick={handleUnlike} />
                            : <img src={iconUnlike} alt='no-favorite'
                                className='iconmonstr-favorite'
                                onClick={handleLike} />
                    }
                </Box>
            </Box>
        </>
    );
};

export default DescriptionCard;