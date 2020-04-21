import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import { Header, Container, Segment, Image, Item, Embed, Label } from 'semantic-ui-react';
import { DataContext } from '../components/DataProvider';
import routes from "./../utils/routes";

const baseRoute = routes.baseRoute;

const Episodes = ({eps, epId}) => {
    return (
        <Label.Group style={{paddingTop: '20px'}}>
        {
            eps.map(dt => (
                <Label
                    as={Link}
                    key={dt.title}
                    content={dt.title}
                    icon='mail'
                    active={(epId === dt.id)}
                    href={`${baseRoute}/watch/${dt.parentId}/${dt.id}`}
                    to={`${baseRoute}/watch/${dt.parentId}/${dt.id}`}
                />
            ))
        }
        </Label.Group>
    );
};

const WatchVideo = () => {
    const values = useContext(DataContext);
    const { name, subname } = useParams();
    
    let item = values.data.filter(d => name === d.id)[0];
    const [ imdbInfo, setImdbInfo ] = useState(null);

    useEffect(() => {
        if(item && item.imdbID) {
            fetch(`http://www.omdbapi.com/?i=${item.imdbID}&apikey=c11086ed&plot=full`)
                .then(response => response.json())
                .then(data => setImdbInfo(data));
        }
    }, [item]);

    const extras = item && item.widerImgUrl ? { placeholder: item.widerImgUrl } : {};

    let eps = [];
    if(item) {
        eps = values.subData[item.id] || [];
    }

    let epId = subname;
    if(!epId) {
        if(eps.length > 0) {
            epId = eps[0].id;
        }
    }

    if(eps.length > 0) {
        let { title, url, type } = eps.filter(d => epId === d.id)[0] || {};
        item = { ...item, title, url, type };
    }

    return (
        <Container>
            { values.isLoading && (
                <Segment loading>
                    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                </Segment>
            )}
            { item && (
                <Header as='h2'>
                    {item.title}
                    <Header.Subheader>
                    {item.desc}
                    </Header.Subheader>
                </Header>
            ) }
            { item && (item.type === 'youtube' ? (<Embed
                    id={item.url}
                    source='youtube'
                    iframe={{ allowFullScreen: true }}
                    {...extras}
                />) : (<Embed
                    url={item.url}
                    iframe={{ allowFullScreen: true }}
                    {...extras}
                />))
            }
            <Episodes eps={eps} epId={epId} />
            { imdbInfo && (
                    <Item.Group
                        items={[{
                            image: imdbInfo.Poster,
                            header: imdbInfo.Title,
                            description: imdbInfo.Plot,
                            meta: (
                            <div>
                                <b>Year:</b> {imdbInfo.Year} <br />
                                <b>Released:</b> {imdbInfo.Released} <br />
                                <b>Genre:</b> {imdbInfo.Genre} <br />
                                <b>Director:</b> {imdbInfo.Director} <br />
                                <b>Writer:</b> {imdbInfo.Writer}
                            </div>
                            ),
                            extra: '',
                        }]}
                    />
                )
            }
            <br /><br /><br />
        </Container>
    );
};

export default WatchVideo;