import React from 'react';

import Comment from './Comment';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            commentArr: []
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
               {this.state.commentArr.map((data, index) => {
                   return <Comment
                        comments={data.comments}
                        username={data.username}
                        text={data.text}
                        key={index}
                    />
               })}
           </div>
        );
    }
}

export default CommentSection;
