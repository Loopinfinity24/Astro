import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../scss/font.scss';
import '../scss/resets.scss';
import '../scss/App.scss';

import Gemini from '../components/Gemini';

function App(props) {
  return (

    <Router>
      <div className="app">
        <Switch>
          
          <Route path="/Gemini" component={Gemini} />
        
        </Switch>
      </div>
    </Router>
  );
}

export default App;
