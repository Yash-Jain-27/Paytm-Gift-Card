import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EventPage from './components/event_page/event_page';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <EventPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;