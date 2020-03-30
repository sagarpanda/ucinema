import React from 'react';
import { Segment } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import AppMenu from './components/AppMenu';
import Home from './containers/Home';
import Movies from './containers/Movies';
import TvSeries from './containers/TvSeries';
import WatchVideo from './containers/WatchVideo';

function App() {
  return (
    <Router>
      <Segment>
        <AppMenu />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/tv-series">
            <TvSeries />
          </Route>
          <Route path="/watch/:name">
            <WatchVideo />
          </Route>
        </Switch>
      </Segment>
    </Router>
  );
}

export default App;
