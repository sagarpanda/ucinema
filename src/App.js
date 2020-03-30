import React from 'react';
import { Segment } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import AppMenu from './components/AppMenu';
import Home from './containers/Home';
import Movies from './containers/Movies';
import TvSeries from './containers/TvSeries';
import WatchVideo from './containers/WatchVideo';
import routes from "./utils/routes"

const baseRoute = routes.baseRoute;

function App() {
  return (
    <Router>
      <Segment>
        <AppMenu />
        <Switch>
          <Route exact path={`${baseRoute}/`}>
            <Home />
          </Route>
          <Route path={`${baseRoute}/movies`}>
            <Movies />
          </Route>
          <Route path={`${baseRoute}/tv-series`}>
            <TvSeries />
          </Route>
          <Route path={`${baseRoute}/watch/:name`}>
            <WatchVideo />
          </Route>
        </Switch>
      </Segment>
    </Router>
  );
}

export default App;
