import React, { useContext } from 'react';
import { Container } from 'semantic-ui-react';
import { DataContext } from '../components/DataProvider';
import VideoCardGroup from '../components/VideoCardGroup';

const TvSeries = () => {
    const values = useContext(DataContext);
    const series = values.data.filter(item => item.category === 'series');

    return (
        <Container>
            <VideoCardGroup list={series} />
        </Container>
    );
};

export default TvSeries;