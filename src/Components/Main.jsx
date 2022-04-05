import App from "./App.jsx";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/Action.jsx";
// import { withRouter } from "react-router";
function mapStateToProps(state) {
  return {
    posts: state.posts,
    comment: state.comments,
    users: state.users,
    loggedIn: state.loggedIn,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const Main = connect(mapStateToProps, mapDispatchToProps)(App);

export default Main;
