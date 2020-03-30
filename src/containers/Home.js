import React, { useContext } from 'react';
import { Container, Card } from 'semantic-ui-react';
import { DataContext } from '../components/DataProvider';
import VideoCard from '../components/VideoCard';

const Home = () => {
    const values = useContext(DataContext);
    
    return (
        <Container>
            <Card.Group>
                {
                    values.data.map(item => (
                        <VideoCard
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            imgUrl={item.imgUrl}
                            createdDate={item.createdDate}
                        />
                    ))
                }
            </Card.Group>
        </Container>
    );
};

export default Home;