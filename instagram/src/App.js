import React, { Component } from 'react';
import './App.css';

import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

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
