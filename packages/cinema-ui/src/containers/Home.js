import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'semantic-ui-react';
import { DataContext } from '../components/DataProvider';
import VideoCardGroup from '../components/VideoCardGroup';

const Home = () => {
    const values = useContext(DataContext);
    
    return (
        <Container>
            <Helmet>
                <title>uCinema</title>
                <meta name="description" content="Watch movies on uCinema" />
            </Helmet>
            <VideoCardGroup list={values.data} />
        </Container>
    );
};

export default Home;