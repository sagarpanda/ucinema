import React from 'react';
import { Card } from 'semantic-ui-react';
import VideoCard from '../components/VideoCard';

const VideoCardGroup = ({ list }) => {
  return (
    <Card.Group>
        {
            list.map(item => (
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
  );
};

export default VideoCardGroup;