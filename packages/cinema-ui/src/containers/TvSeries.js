import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'semantic-ui-react';
import { DataContext } from '../components/DataProvider';
import VideoCardGroup from '../components/VideoCardGroup';

const TvSeries = () => {
    const values = useContext(DataContext);
    const series = values.data.filter(item => item.category === 'series');

    return (
        <Container>
            <Helmet>
                <title>Tv Series | uCinema</title>
                <meta name="description" content="Watch tv series on uCinema" />
            </Helmet>
            <VideoCardGroup list={series} />
        </Container>
    );
};

export default TvSeries;