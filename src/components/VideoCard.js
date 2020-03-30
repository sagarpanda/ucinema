import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import routes from "./../utils/routes"
import './VideoCard.css';

const baseRoute = routes.baseRoute;

const VideoCard = ({ id, title, imgUrl, createdDate }) => {
    const gUrl = imgUrl || 'https://as2.ftcdn.net/jpg/02/56/58/31/500_F_256583172_kTP1xZVrVevahIk7P5wsr8VUgeC3X2q8.jpg';
    return (
        <Card as={Link} href={`${baseRoute}/watch/${id}`} to={`${baseRoute}/watch/${id}`} className="video-card">
            <Image className="fixed-height" size="medium" src={gUrl} wrapped ui={false} />
            <Card.Content className="content-over-image">
                {/*<Card.Meta>
                    <span className='date'>Added on {createdDate}</span>
                </Card.Meta>*/}
                <Card.Description className="color-white">
                {title}
                </Card.Description>
            </Card.Content>
        </Card>
    );
};

export default VideoCard;