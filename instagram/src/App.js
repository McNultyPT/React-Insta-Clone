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
      postData: []
    }
  }

  componentDidMount() {
    this.setState({
      postData: dummyData
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
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

App.propTypes = {
  username: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  imageUrl: PropTypes.string,
  likes: PropTypes.number,
  timestamp: PropTypes.string,
  comments: PropTypes.array
}

export default App;
