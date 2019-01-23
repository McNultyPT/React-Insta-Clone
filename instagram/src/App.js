import React, { Component } from 'react';

import './App.css';
import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage';
import authenticate from './components/authentication/authenticate';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: [],
      searchInput: '',
    }
  }

  componentDidMount() {
    this.setState({
      postData: dummyData
    });
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  searchFilter = e => {
    e.preventDefault();
    let searchResult = this.state.postData.filter( post => {
      if(post.username.includes(this.state.searchInput)) {
        return post.username;
      }
    })
    this.setState({
      postData: searchResult
    })
  }

  render() {
    return (
      <div className="App">
        <PostsPage
          handleChanges={this.handleChanges}
          searchInput={this.state.searchInput}
          searchFilter={this.searchFilter} 
          postData={this.state.postData} 
        />
      </div>
    );
  }
}

export default App;
