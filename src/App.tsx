import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Property from './pages/Manage/Property/Property';
import CreateProperty from './pages/Manage/Property/AddProperty/CreateProperty';
import EditProperty from './pages/Manage/Property/EditProperty/EditProperty';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={'/manage/property/edit/:index'} component={EditProperty} />
        <Route path={'/manage/property/create'} component={CreateProperty} />
        <Route path={'/manage/property'} component={Property} />
        <Route
          path={'/manage'}
          render={() => <Redirect to={'/manage/property'} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
