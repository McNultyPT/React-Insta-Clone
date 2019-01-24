import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import dummyData from '../../dummy-data';

const PostsPageCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
`;

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
        const filteredPosts = this.state.postData.filter( post => {
            if (post.username.includes(this.state.searchInput)) {
                return post;
            }
            return null;
        });
        this.setState({
            postData: filteredPosts
        })
      };

    render() {
        return(
            <PostsPageCont>
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
            </PostsPageCont>
        )
    }
}

PostsPage.propTypes = {
    handleChanges: PropTypes.func,
    searchInput: PropTypes.string,
    searchFilter: PropTypes.func,
    postData: PropTypes.array
}

export default PostsPage;