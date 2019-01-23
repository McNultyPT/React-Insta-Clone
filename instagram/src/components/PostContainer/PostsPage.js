import React from 'react';

import './PostContainer.css';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';


function PostsPage(props) {
    return(
        <div className='postsPage'>
          <SearchBar
          handleChanges={props.handleChanges}
          searchInput={props.searchInput}
          searchFilter={props.searchFilter}
        />
        {props.postData.map((data, index) => {
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

export default PostsPage;