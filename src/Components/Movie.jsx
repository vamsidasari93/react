import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
function Movie(props) {
  return (
    <div className="image-box">
      <div className="image">
        <Link to={`/single/${props.cinema.id}`}>
          <img src={props.cinema.banner} alt={props.cinema.name} />
        </Link>
      </div>

      <div className="image-text , title ">
        <p className="name">{props.cinema.name}</p>
      </div>
      <div className="comments-button">
        <div className="align-self">
          <button
            className="remove-btn "
            onClick={() => {
              props.startRemovingPost(props.index, props.cinema.id);
              props.history.push("/");
            }}
          >
            Remove
          </button>
        </div>
        <div>
          <Link className="comment-button" to={`/single/${props.cinema.id}`}>
            <div className="d-flex align-items-center">
              <p className="comments">
                <i
                  style={{ marginRight: "4px" }}
                  className="fa fa-comments-o"
                  aria-hidden="true"
                ></i>
                <span style={{ marginRight: "4px" }}>
                  {props.comment[props.cinema.id]
                    ? props.comment[props.cinema.id]?.length
                    : 0}
                </span>
                Comments
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Movie;
