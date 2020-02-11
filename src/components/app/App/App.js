import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout/MainLayout';
import CataloguePage from '@/components/pages/CataloguePage/CataloguePage';
import ScenePage from '@/components/pages/ScenePage/ScenePage';
import UnreleasedCataloguePage from '@/components/pages/UnreleasedCataloguePage/UnreleasedCataloguePage';

const UnreleasedScene = props => <ScenePage {...props} unreleased />;

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={CataloguePage} />
          <Route exact path="/scene/:id" component={ScenePage} />
          <Route exact path="/u" component={UnreleasedCataloguePage} />
          <Route exact path="/u/:id" component={UnreleasedScene} />

          <Redirect to="/" />
        </Switch>
      </MainLayout>
    </Router>
  );
};

export default App;
