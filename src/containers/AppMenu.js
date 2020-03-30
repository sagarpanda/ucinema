import React, { useState, useCallback, useContext } from 'react';
import { Menu, Search } from 'semantic-ui-react';
import { withRouter } from "react-router";
import { Link, useHistory } from "react-router-dom";
import { DataContext } from '../components/DataProvider';
import routes from "../utils/routes"

const baseRoute = routes.baseRoute;

const AppMenu = ({ location }) => {
    const activeItem = location.pathname;
    const values = useContext(DataContext);
    const history = useHistory();

    const [ data, setData ] = useState({ loading: false, value: '', results: [] });

    const handleSearchChange = useCallback((e, { value }) => {
      setData({ loading: true, value, results: [] });
      const results = values.data.filter(item => item.title.toLowerCase().indexOf(value) > -1);
      setData({ loading: false, value, results });
    }, [values]);
    const handleResultSelect = useCallback((e, { result }) => {
      setData({ loading: false, value: '', results: [] });
      history.push(`/watch/${result.id}`);
    }, [history]);
    
    return (
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
              <Search
                loading={data.loading}
                results={data.results}
                value={data.value}
                onSearchChange={handleSearchChange}
                onResultSelect={handleResultSelect}
              />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
    );
};

export default withRouter(AppMenu);