import React from 'react';

import CommentSection from '../CommentSection/CommentSection';

function PostContainer(props) {
    return (
        <CommentSection
            likes={props.likes}
            comments={props.comments}
            timestamp={props.timestamp}
        />
    )
}

export default PostContainer;