import React from 'react';
import PropTypes from 'prop-types';

import './CommentSection.css';
import Comment from './Comment';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            commentArr: [],
            likes: props.likes
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

    render() {
        return (
           <div className='commentContainer'>
               <div className='commentTop'>
                    <i class="far fa-heart fa-lg" onClick={this.addNewLike}></i>
                    <i class="far fa-comment fa-lg"></i>    
                    <div className='likesContainer'>
                        <h3>{this.state.likes}</h3>
                        <p>likes</p>
                    </div>
               </div>
               <div className='commentMid'>
                    {this.state.commentArr.map((data, index) => {
                        return <Comment
                            comments={data.comments}
                            username={data.username}
                            text={data.text}
                            key={index}
                        />
                    })}
                <h4>{this.props.timestamp}</h4>
               </div>
               <div className='commentBot'>
                    <form>
                        <input
                            type='text'
                            placeholder='Add a comment...'
                        />
                    </form>
                </div>
            </div>
        );
    }
}

CommentSection.propTypes = {
    likes: PropTypes.number,
    comments: PropTypes.array,
    username: PropTypes.string,
    text: PropTypes.string,
    timestamp: PropTypes.string
}

export default CommentSection;
