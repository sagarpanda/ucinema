import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import ReactGA from 'react-ga';

const DetectRouteChange = () => {
  const history = useHistory();
  useEffect(() => {
      return history.listen((location) => {
          ReactGA.set({ page: location.pathname });
          ReactGA.pageview(location.pathname)
      });
  }, [history]);

  return <div />
};

export default DetectRouteChange;