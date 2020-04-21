import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import AppMenu from './containers/AppMenu';
import Home from './containers/Home';
import Movies from './containers/Movies';
import TvSeries from './containers/TvSeries';
import IntraMovies from './containers/IntraMovies';
import WatchVideo from './containers/WatchVideo';
import IntraWatchVideo from './containers/IntraWatchVideo';
import DetectRouteChange from './components/DetectRouteChange';
import routes from "./utils/routes"

const baseRoute = routes.baseRoute;

function App() {
  return (
    <Router>
      <div>
        <DetectRouteChange />
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
          <Route path={`${baseRoute}/watch/:name/:subname?`}>
            <WatchVideo />
          </Route>
          <Route path={`${baseRoute}/intra-movies`}>
            <IntraMovies />
          </Route>
          <Route path={`${baseRoute}/intra/watch/:name/:subname?`}>
            <IntraWatchVideo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
