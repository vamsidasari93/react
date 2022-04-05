import React from "react";
import Movie from "./Movie.jsx";
import Comments from "./Comments.jsx";

class Single extends React.Component {
  render() {
    const { match, posts } = this.props;
    const id = +match.params.id;
    const index = posts.findIndex((post) => {
      return post.id === id;
    });
    const post = posts[index];
    const comments = this.props.comment[id] || [];
    if (this.props.loading === true) {
      return <div className="loader">...Loading</div>;
    } else {
      return (
        <div className="container">
          <div className="single-photo row">
            <Movie {...this.props} cinema={post} index={index} />
            <Comments
              startAddingComments={this.props.startAddingComments}
              comments={comments}
              postId={id}
            />
          </div>
        </div>
      );
    }
  }
}
export default Single;
