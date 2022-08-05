import React, { useState } from 'react';
import { Box } from '@mui/material';
import '../styles/description.css';
import { Hits } from '../general/types';
import moment from 'moment';
import { formatDate } from '../general/utils';
import DescriptionCard from './cards/DescriptionCard';

interface Props {
    hit: Hits,
    likes: boolean,
    faves: string,
    setLikes: React.Dispatch<React.SetStateAction<boolean>>
}

const NewsDescription = ({ hit, likes, faves, setLikes }: Props) => {

    const [like, setLike] = useState(false);
    const year = formatDate(new Date(hit?.created_at)).year;
    const month = formatDate(new Date(hit?.created_at)).month;
    const day = formatDate(new Date(hit?.created_at)).day;
    const hour = formatDate(new Date(hit?.created_at)).hour;
    const dateAuthor = moment(`${year}-${month}-${day} ${hour}`, 'YY-MM-DD HH').fromNow();
    setLikes(like);

    return (
        <>
            {

                faves == 'all_faves'
                    ?
                    <Box sx={{ visibility: 'visible', position: 'sticky' }}>
                        <DescriptionCard
                            hit={hit}
                            dateAuthor={dateAuthor}
                            like={like}
                            setLike={setLike}
                        />
                    </Box>
                    :
                    (!like
                        ? <Box sx={{ visibility: 'hidden', position: 'absolute' }}>
                            <DescriptionCard
                                hit={hit}
                                dateAuthor={dateAuthor}
                                like={like}
                                setLike={setLike}
                            />
                        </Box>
                        : <Box sx={{ visibility: 'visible' }}>
                            <DescriptionCard
                                hit={hit}
                                dateAuthor={dateAuthor}
                                like={like}
                                setLike={setLike}
                            />
                        </Box>
                    )
            }
        </>
    );
};

export default NewsDescription;