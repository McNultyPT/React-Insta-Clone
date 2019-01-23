import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';


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
        <SearchBar
          handleChanges={this.handleChanges}
          searchInput={this.state.searchInput}
          searchFilter={this.searchFilter}
        />
        {this.state.postData.map((data, index) => {
          return <PostContainer
            username={data.username}
            thumbnailUrl={data.thumbnailUrl}
            imageUrl={data.imageUrl}
            likes={data.likes}
            timestamp={data.timestamp}
            comments={data.comments}
            key={index}
        />
        })}
      </div>
    );
  }
}

export default App;
