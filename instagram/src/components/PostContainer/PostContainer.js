import React from 'react';
import './PostContainer.css';

import CommentSection from '../CommentSection/CommentSection';

function PostContainer(props) {
    return (
        <div className='postCont'>
            <div className='topContent'>
                <img src={props.thumbnailUrl} />
                <h3>{props.username}</h3>
            </div>
            <div className='midContent'>
                <img src={props.imageUrl} />
            </div>
            <CommentSection
                likes={props.likes}
                comments={props.comments}
                timestamp={props.timestamp}
            />
        </div>
    )
}

export default PostContainer;