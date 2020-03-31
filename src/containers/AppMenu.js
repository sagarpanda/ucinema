import React, { useContext } from 'react';
import { Menu, Search, Responsive, Container } from 'semantic-ui-react';
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { DataContext } from '../components/DataProvider';
import routes from "../utils/routes";
import useSearch from '../hooks/useSearch';

const baseRoute = routes.baseRoute;
const bottomSpacing = '20px';

const AppMenu = ({ location }) => {
    const activeItem = location.pathname;
    const values = useContext(DataContext);

    const { data, handleSearchChange, handleResultSelect } = useSearch(values.data);
    
    return (
      <>
        <Menu fixed='top' inverted>
          <Menu.Item header>uCinema</Menu.Item>
          <Menu.Item
            as={Link}
            name='home'
            active={activeItem === `${baseRoute}/`}
            href={`${baseRoute}/`}
            to={`${baseRoute}/`}
          />
          <Menu.Item
            as={Link}
            name='movies'
            active={activeItem === `${baseRoute}/movies`}
            href={`${baseRoute}/movies`}
            to={`${baseRoute}/movies`}
          />
          <Menu.Item
            as={Link}
            name='tv-series'
            active={activeItem === `${baseRoute}/tv-series`}
            href={`${baseRoute}/tv-series`}
            to={`${baseRoute}/tv-series`}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Responsive
                as={Search}
                loading={data.loading}
                results={data.results}
                value={data.value}
                onSearchChange={handleSearchChange}
                onResultSelect={handleResultSelect}
                minWidth={550}
              />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Responsive
          as={Container}
          maxWidth={550}
          style={{ padding: `${bottomSpacing} 0`, marginTop: '40px' }}>
          <Search
            loading={data.loading}
            results={data.results}
            value={data.value}
            onSearchChange={handleSearchChange}
            onResultSelect={handleResultSelect}
            minWidth={550}
            input={{ style: { width: '100%' } }}
          />
        </Responsive>
        <Responsive
          as="div"
          minWidth={550}
          style={{ paddingBottom: bottomSpacing, marginTop: '64px' }}
        />
      </>
    );
};

export default withRouter(AppMenu);