import React, { useContext } from 'react';
import { Container } from 'semantic-ui-react';
import { DataContext } from '../components/DataProvider';
import VideoCardGroup from '../components/VideoCardGroup';

const Home = () => {
    const values = useContext(DataContext);
    console.log(values);
    
    return (
        <Container>
            <VideoCardGroup list={values.data} />
        </Container>
    );
};

export default Home;