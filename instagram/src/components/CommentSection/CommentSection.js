import React from 'react';

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

    render() {
        return (
           <div>
               <div>
                    <i class="far fa-heart fa-lg" onClick={this.addNewLike}></i>
                    <i class="far fa-comment fa-lg"></i>    
                    <div>
                        <h3>{this.state.likes}</h3>
                        <p>likes</p>
                    </div>
               </div>
               <div>
                    {this.state.commentArr.map((data, index) => {
                        return <Comment
                            comments={data.comments}
                            username={data.username}
                            text={data.text}
                            key={index}
                        />
                    })}
                <p>{this.props.timestamp}</p>
               </div>
               <form>
                   <input
                        type='text'
                        placeholder='Add a comment...'
                   />
               </form>
           </div>
        );
    }
}

export default CommentSection;
