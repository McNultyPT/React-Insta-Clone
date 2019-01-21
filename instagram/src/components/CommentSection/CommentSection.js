import React from 'react';

import Comment from './Comment';

function CommentSection(props) {
    return (
        <Comment
            comments={props.comments}
            username={props.username}
            text={props.text}
        />
    );
}

export default CommentSection;
