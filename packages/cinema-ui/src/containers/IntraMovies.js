import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'semantic-ui-react';
import { DataContext } from '../components/DataProvider';
import VideoCardGroup from '../components/VideoCardGroup';

const IntraMovies = () => {
    const values = useContext(DataContext);
    console.log(values);
    
    return (
        <Container>
            <Helmet>
                <title>uCinema</title>
                <meta name="description" content="Watch movies on uCinema" />
            </Helmet>
            <VideoCardGroup intra list={values.cloudData} />
        </Container>
    );
};

export default IntraMovies;