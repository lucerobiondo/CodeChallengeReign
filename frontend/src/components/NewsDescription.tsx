import React, { useState } from 'react';
import { Box } from '@mui/material';
import '../styles/description.css';
import { Hits } from '../general/types';
import moment from 'moment';
import { formatDate } from '../general/utils';
import DescriptionCard from './cards/DescriptionCard';

interface Props {
    hit: Hits,
    faves: string,
}

const NewsDescription = ({ hit, faves }: Props) => {

    const [like, setLike] = useState(false);
    const year = formatDate(new Date(hit?.created_at)).year.toString();
    const month = formatDate(new Date(hit?.created_at)).month.toString();
    const day = formatDate(new Date(hit?.created_at)).day.toString();
    const hour = formatDate(new Date(hit?.created_at)).hour.toString();
    const dateAuthor = moment(`${year}-${month}-${day} ${hour}`, 'YYYY-MM-DD HH').fromNow();

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