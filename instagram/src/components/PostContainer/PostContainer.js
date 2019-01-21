import React from 'react';
import PropTypes from 'prop-types';

import './PostContainer.css';

import CommentSection from '../CommentSection/CommentSection';

function PostContainer(props) {
    return (
        <div className='postCont'>
            <div className='topContent'>
                <img src={props.thumbnailUrl} alt='thumbnail' />
                <h3>{props.username}</h3>
            </div>
            <div className='midContent'>
                <img src={props.imageUrl} alt='post' />
            </div>
            <CommentSection
                likes={props.likes}
                comments={props.comments}
                timestamp={props.timestamp}
            />
        </div>
    )
}

PostContainer.propTypes = {
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    comments: PropTypes.array,
    timestamp: PropTypes.string
}

export default PostContainer;