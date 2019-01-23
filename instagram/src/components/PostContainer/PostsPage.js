import React from 'react';
// import PropTypes from 'prop-types';

import './PostContainer.css';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import dummyData from '../../dummy-data';


class PostsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            postData: [],
            searchInput: ''
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
         return(
            <div className='postsPage'>
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
        )
    }
}

// PostsPage.propTypes = {
//     handleChanges: PropTypes.function,
//     searchInput: PropTypes.string,
//     searchFilter: PropTypes.function,
//     postData: PropTypes.array
// }

export default PostsPage;