import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import './CommentSection.css';
import Comment from './Comment';

const CommentTop = styled.div`
    margin: -15px 0 0 17px;
`;

const LikesCont = styled.div`
    display: flex;
    margin-top: -8px;
`;

const LikesH3 = styled.h3`
    font-size: 15px;
`;

const LikesP = styled.p`
    margin: 15px 0 0 5px;
    font-size: 15px;
`;

const CommentMidH4 = styled.h4`
    font-size: 10px;
    color: grey;
    margin: -5px 0 0 15px;
`;

const CommentBot = styled.div`
    margin: 10px 0 0 0;
`;

const CommentInput = styled.input`
    width: 565px;
    height: 51px;
    font-size: 14px;
    color: grey;
    margin-left:15px;
    margin-right: 15px;
    border-top: 1px solid lightgrey;
    border-right: none;
    border-left: none;
    border-bottom: none;
    padding-left: 10px;
`;

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            commentArr: [],
            likes: props.likes,
            commentData: '',
            username:''
        }
    }

    componentDidMount() {
        this.setState({
            commentArr: this.props.comments
        })
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    addNewLike = () => {
        this.setState((prevState) => {
            return {
                likes: ++prevState.likes
            }
        })
    }

    addNewComment = e => {
        e.preventDefault();
        this.setState({
            commentArr: [...this.state.commentArr,
                {username: localStorage.getItem('username'),
                 text: this.state.commentData
                }
            ],
            commentData: ''
        })
    }

    render() {
        return (
           <div>
               <CommentTop>
                    <i class="far fa-heart fa-lg" onClick={this.addNewLike}></i>
                    <i class="far fa-comment fa-lg"></i>    
                    <LikesCont>
                        <LikesH3>{this.state.likes}</LikesH3>
                        <LikesP>likes</LikesP>
                    </LikesCont>
               </CommentTop>
               <div>
                    {this.state.commentArr.map((data, index) => {
                        return <Comment
                            comments={data.comments}
                            username={data.username}
                            text={data.text}
                            key={index}
                        />
                    })}
                <CommentMidH4>{this.props.timestamp}</CommentMidH4>
               </div>
               <CommentBot>
                    <form onSubmit={this.addNewComment}>
                        <CommentInput
                            type='text'
                            placeholder='Add a comment...'
                            value={this.state.commentData}
                            name='commentData'
                            onChange={this.handleChanges}
                        />
                    </form>
                </CommentBot>
            </div>
        );
    }
}

CommentSection.propTypes = {
    likes: PropTypes.number,
    comments: PropTypes.array,
    timestamp: PropTypes.string
}

export default CommentSection;
