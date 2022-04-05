import movies from "../data/Movie";
import { combineReducers } from "redux";
import _users from "../data/Users";

function comments(state = {}, action) {
  switch (action.type) {
    case "ADD_COMMENT":
      if (!state[action.postId]) {
        return { ...state, [action.postId]: [action.comment] };
      } else {
        return {
          ...state,
          [action.postId]: [...state[action.postId], action.comment],
        };
      }
    case "LOAD_COMMENTS":
      return action.comments;

    default:
      return state;
  }
}
const loggedIn = (state = false, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return action.changeVal;
    default:
      return state;
  }
};

const users = (state = _users, action) => {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.user];
    default:
      return state;
  }
};

function posts(state = movies, action) {
  switch (action.type) {
    case "REMOVE_POST":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    case "ADD_POST":
      return [action.post, ...state];

    case "LOAD_POSTS":
      return action.posts;

    default:
      return state;
  }
}

const rootReducer = combineReducers({ posts, comments, users, loggedIn });

export default rootReducer;
