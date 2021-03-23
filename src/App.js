import React, {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Loading from './components/Loading'
const AlbumInfo = lazy(() => import('./components/AlbumInfo'))
const AlbumList = lazy(() => import('./components/AlbumList'))
const NotFound = lazy(() => import('./components/NotFound'))


function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={AlbumList} />
          <Route exact path="/album/:id" component={AlbumInfo} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
