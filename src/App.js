import React from 'react';
import {Helmet} from 'react-helmet';
import './App.css';
import Home from './pages'
import {BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <Router> 
      <Home />
    <Helmet>
      <meta charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Edgard Consulting</title>
    </Helmet>
    </Router>
  );
}

export default App;
