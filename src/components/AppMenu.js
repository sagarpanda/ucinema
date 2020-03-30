import React from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import routes from "./../utils/routes"

const baseRoute = routes.baseRoute;

const AppMenu = ({ location }) => {
    const activeItem = location.pathname;
    
    return (
        <Menu inverted>
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
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
    );
};

export default withRouter(AppMenu);