import React, { useState } from 'react';
import { Box } from '@mui/material';
import '../styles/description.css';
import time from '../components/Images/iconmonstr-time-2@3x.png';
import iconUnlike from '../components/Images/iconmonstr-favorite-2@3x.png';
import iconLike from '../components/Images/iconmonstr-favorite-3@3x.png';
import { Hits } from '../general/types';
import moment from 'moment';
import { formatDate } from '../general/utils';

interface Props {
    hit: Hits,
}

const NewsDescription = ({ hit }: Props) => {
    
    const [like, setLike] = useState(false);

    const handleLike = () => {
        setLike(true);
    };
    const handleUnlike = () => {
        setLike(false);
    };
    const year = formatDate(new Date(hit?.created_at)).year;
    const month = formatDate(new Date(hit?.created_at)).month;
    const day = formatDate(new Date(hit?.created_at)).day;
    const hour = formatDate(new Date(hit?.created_at)).hour;
    const dateAuthor = moment(`${year}-${month}-${day} ${hour}`, 'YY-MM-DD HH').fromNow();

    return (
        <>
            <Box className="Rectangle-Patern">
                <Box className="Reactangle-1">
                    <Box display="flex" height="20px">
                        <img src={time} alt='icon-Time' className='iconmonstr-time-2' />
                        <p className='-hours-ago-by-autho'>
                            {dateAuthor} by author
                        </p>
                    </Box>
                    <Box display="flex" height="auto" paddingBottom="10px">
                        <p className='Event-driven-state-m'>
                            {hit.story_title}
                        </p>
                    </Box>
                </Box>
                <Box className="Rectangle-favorite">
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

export default NewsDescription;