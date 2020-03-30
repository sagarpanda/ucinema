import React, { useContext } from 'react';
import { Container } from 'semantic-ui-react';
import { DataContext } from '../components/DataProvider';
import VideoCardGroup from '../components/VideoCardGroup';

const Movies = () => {
    const values = useContext(DataContext);
    const movies = values.data.filter(item => item.category === 'movie');

    return (
        <Container>
            <VideoCardGroup list={movies} />
        </Container>
    );
};

export default Movies;