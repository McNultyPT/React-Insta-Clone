import React from 'react';

import CommentSection from '../CommentSection/CommentSection';
import { POINT_CONVERSION_COMPRESSED } from 'constants';

function PostContainer(props) {
    return (
        <div>
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