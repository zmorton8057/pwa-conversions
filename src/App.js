import React, { Component } from 'react';
import { Router, browserHistory, Route } from 'react-router';
import { Link, } from 'react-router-dom';
import './App.css';
const NavBar = () => (

  <div className="navbar">
    <Router history={browserHistory}>
      <Link to="/">Feed</Link>

      <Link to="/profile">Profile</Link>
    </Router>
  </div>

);


const Template = ({ title }) => (

  <div>

    <NavBar />

    <p className="page-info">

      This is the {title} page.

</p>

  </div>

);


const Feed = (props) => (

  <Template title="Feed" />

);


const Profile = (props) => (

  <Template title="Profile" />

);


class App extends Component {

  render() {

    return (

      <Router history={browserHistory}>

        <Route path="/" component={Feed} />

        <Route path="/profile" component={Profile} />

      </Router>

    );

  }

}

export default App;