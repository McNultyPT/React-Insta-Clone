import React from 'react';

function Comment(props) {
    return (
        <div>
            <h3>{props.username}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export default Comment;