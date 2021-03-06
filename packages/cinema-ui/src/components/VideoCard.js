import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import routes from "./../utils/routes";
import './VideoCard.css';

const baseRoute = routes.baseRoute;

const VideoCard = ({ id, title, imgUrl, createdDate, intra }) => {
    const gUrl = imgUrl || 'https://i.imgur.com/0FX7ZPe.jpg';
    const href = intra ? `${baseRoute}/intra/watch/${id}` : `${baseRoute}/watch/${id}`;
    return (
        <Card as={Link} href={href} to={href} className="video-card">
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