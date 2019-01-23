import React, { Component } from 'react';

import './App.css';
import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage';
import authenticate from './components/authentication/authenticate';
import Login from './components/Login/Login';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: [],
      searchInput: '',
    }
  }

  render() {
    return (
      <div className="App">
        <ConditionalView />
      </div>
    );
  }
}

const ConditionalView = authenticate(PostsPage)(Login);

export default App;
