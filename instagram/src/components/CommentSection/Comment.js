import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentCont = styled.div`
    display: flex;
    margin: 0 0 7px 15px;
    line-height: 1.8;
`;

const CommentH3 = styled.h3`
    margin: -10px 0 0 0;
    font-size: 15px;
`;

const CommentP = styled.p`
    margin: -10px 0 0 5px;
    font-size: 15px;
`;

function Comment(props) {
    return (
        <CommentCont className='comment'>
            <CommentH3>{props.username}</CommentH3>
            <CommentP>{props.text}</CommentP>
        </CommentCont>
    )
}

Comment.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string
}

export default Comment;