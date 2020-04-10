import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

class App extends Component {
  render() {
    return (
      <Router>
        <div >
          <div >
            <img src={logo}  alt="logo" />
            <h2>Welcome to React</h2>
            <Link to="/">Home</Link>
            <Link to="/otherpage">Other Page</Link>
          </div>
          <div>
            <Route exact path="/" component={Fib} />
            <Router path="/otherpage" component={OtherPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
