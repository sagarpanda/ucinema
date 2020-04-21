import React, { useContext } from 'react';
import { Container } from 'semantic-ui-react';
import { DataContext } from '../components/DataProvider';
import VideoCardGroup from '../components/VideoCardGroup';

const IntraMovies = () => {
    const values = useContext(DataContext);
    console.log(values);
    
    return (
        <Container>
            <VideoCardGroup intra list={values.cloudData} />
        </Container>
    );
};

export default IntraMovies;