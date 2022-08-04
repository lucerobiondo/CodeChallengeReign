import '../styles/home.css';
import { Box } from '@mui/material';
import HomeView from '../components/HomeView';
import ColorToggleButton from '../components/ColorToggleButton';

const Home = () => {

    return (
        <>
            <Box className="Rectangle-2-Copy">
                <h1 className="HACKER-NEWS Text-Style">
                    HACKER NEWS
                </h1>
            </Box>
            <Box className='ColorToggleButton--Home-view'>
                <ColorToggleButton />
            </Box>
            <Box className="Front-End-Test---Home-view">
                <HomeView />
            </Box>
        </>
    );
}

export default Home