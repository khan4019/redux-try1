import React, { Component } from 'react';
import CommentEditor from '../CommentEditor/CommentEditor';

class Comment extends Component {

    _renderComment(comment, i) {
        //const { postId } = this.props.params;
        return (
          <div className="comment" key={i}>
            <p className="container-flex">
              <strong>{comment.user}</strong>
              {comment.text}
              <CommentEditor editComment={this.props.editComment} i={i} params={this.props.params} />
              <button className="remove-comment">&times;</button>
            </p>
          </div>
        );
      }
    _handleSubmit(e) {
        e.preventDefault();
        const { postId } = this.props.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        // dispatch add comment action
        this.props.addComment(postId, author, comment);
        // then clear form
        this.refs.commentForm.reset();
      }
    render() {
        return (
            <div className="comments">
        {this.props.postComments.map(this._renderComment.bind(this))}
        <form ref="commentForm" className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
        );
    }
}

export default Comment;