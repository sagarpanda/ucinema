import React, { useContext } from 'react';
import { Container } from 'semantic-ui-react';
import { DataContext } from '../components/DataProvider';
import VideoCardGroup from '../components/VideoCardGroup';

const Home = () => {
    const values = useContext(DataContext);
    
    return (
        <Container style={{ marginTop: '7em' }}>
            <VideoCardGroup list={values.data} />
        </Container>
    );
};

export default Home;