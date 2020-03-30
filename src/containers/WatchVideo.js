import React, { useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { Header, Container, Segment, Image, Item, Embed } from 'semantic-ui-react';
import { DataContext } from '../components/DataProvider';

const WatchVideo = ({ match }) => {
    const values = useContext(DataContext);
    const item = values.data.filter(d => match.params.name === d.id)[0];
    const [ imdbInfo, setImdbInfo ] = useState(null);

    useEffect(() => {
        if(item && item.imdbID) {
            fetch(`http://www.omdbapi.com/?i=${item.imdbID}&apikey=c11086ed&plot=full`)
                .then(response => response.json())
                .then(data => setImdbInfo(data));
        }
    }, [item]);

    const extras = item && item.widerImgUrl ? { placeholder: item.widerImgUrl } : {};

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

export default withRouter(WatchVideo);