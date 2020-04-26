import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'semantic-ui-react';
import { DataContext } from '../components/DataProvider';
import VideoCardGroup from '../components/VideoCardGroup';

const Movies = () => {
    const values = useContext(DataContext);
    const movies = values.data.filter(item => item.category === 'movie');

    return (
        <Container>
            <Helmet>
                <title>Movies | uCinema</title>
                <meta name="description" content="Watch movies on uCinema" />
            </Helmet>
            <VideoCardGroup list={movies} />
        </Container>
    );
};

export default Movies;