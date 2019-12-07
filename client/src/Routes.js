import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import CreateEventForm from './components/CreateEventForm';
import Events from './components/Events';
import SingleEvent from './components/SingleEvent';

const Routes = () => {
  return (
    <Router>
      <div id="root">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" />
          <Route path="/signup" />
          <Route path="/donorsignup" />
          <Route path="/nonprofitsignup" />
          <Route path="/create-event" component={CreateEventForm}/>
          <Route path="/single-event" component={SingleEvent}/>
          <Route path="/events" component={Events}/>
          <Route path="/transactionsummary" />
          <Route path="/singleevent" />
        </Switch>
      </div>
    </Router>
  )
}

export default Routes