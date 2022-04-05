import React from "react";
import Movie from "./Movie.jsx";
import "./style.scss";

function Movies(props) {
  return (
    <div className="container">
      <h1>Movies Posters</h1>
      <div className="row">
        {props.posts.map((post, index) => {
          return (
            <Movie
              key={post.name}
              cinema={post}
              {...props}
              index={index}
              history={props.onHistory}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Movies;
