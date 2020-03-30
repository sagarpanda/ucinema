import React from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const AppMenu = ({ location }) => {
    const activeItem = location.pathname;
    
    return (
        <Menu inverted>
          <Menu.Item header>uCinema</Menu.Item>
          <Menu.Item
            as={Link}
            name='home'
            active={activeItem === '/'}
            href='/'
            to="/"
          />
          <Menu.Item
            as={Link}
            name='movies'
            active={activeItem === '/movies'}
            href='/movies'
            to="/movies"
          />
          <Menu.Item
            as={Link}
            name='tv-series'
            active={activeItem === '/tv-series'}
            href='/tv-series'
            to="/tv-series"
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
    );
};

export default withRouter(AppMenu);