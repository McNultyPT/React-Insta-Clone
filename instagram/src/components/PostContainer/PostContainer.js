import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CommentSection from '../CommentSection/CommentSection';

const PostCont = styled.div`
    margin-bottom: 25px;
    border: 1px solid lightgrey;
`;

const PostTop = styled.div`
    display: flex;
    margin-bottom: 15px;
`;

const Thumbnail = styled.img`
    border-radius: 50%;
    height: 30px;
    margin: 17px 0 0 17px;
`;

const PostH3 = styled.h3`
    font-size: 15px;
    margin: 20px 0 0 10px;
`;

const PostImg = styled.img`
    width: 605px;
    height: 600px;
`;

function PostContainer(props) {
    return (
        <PostCont>
            <PostTop>
                <Thumbnail src={props.thumbnailUrl} alt='thumbnail' />
                <PostH3>{props.username}</PostH3>
            </PostTop>
            <div>
                <PostImg src={props.imageUrl} alt='post' />
            </div>
            <CommentSection
                likes={props.likes}
                comments={props.comments}
                timestamp={props.timestamp}
            />
        </PostCont>
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