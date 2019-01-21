import React from 'react';
import PropTypes from 'prop-types';

function Comment(props) {
    return (
        <div className='comment'>
            <h3>{props.username}</h3>
            <p>{props.text}</p>
        </div>
    )
}

Comment.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string
}

export default Comment;