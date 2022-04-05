import React, { Component } from "react";

class Comment extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const comment = event.target.elements.comment.value;
    this.props.startAddingComments(comment, this.props.postId);
    event.target.elements.comment.value = "";
  }

  render() {
    return (
      <div className="add-form image-box">
        {this.props.comments?.map((comment, index) => {
          return <p key={index}>{comment}</p>;
        })}

        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="comments" name="comment" />
          <br />
          <button hidden>submit</button>
        </form>
      </div>
    );
  }
}
export default Comment;
