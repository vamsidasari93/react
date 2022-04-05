import React from "react";
import "./style.scss";
import Movies from "./Movies";
import AddMovie from "./AddMovie.jsx";
import { Route, Link, Redirect } from "react-router-dom";
import Single from "./Single.jsx";
import Head from "./Navbar";
import LoginPage from "./LoginPage";
import RegisterPage from "../Components/RegisterPage";
import MovieFooter from "./footer";
class App extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    this.props.startLoadingPost().then(() => {
      this.setState({ loading: false });
    });
    this.props.startLoadingComments();
  }

  render() {
    return (
      <div className="App">
        <Head {...this.props} />
        <Route
          path="/AddMovie"
          render={({ history }) => {
            return <AddMovie {...this.props} onHistory={history} />;
          }}
        />
        <Route
          exact
          path="/"
          render={({ history }) => (
            <div>
              <div className="text-center"></div>
              <Movies {...this.props} onHistory={history} />
            </div>
          )}
        />
        <Route path="/">
          {this.props.loggedIn ? (
            <Redirect to="/" />
          ) : (
            <Redirect to="/LoginPage" />
          )}
        </Route>
        <Route
          path="/single/:id"
          render={(params) => (
            <Single loading={this.state.loading} {...this.props} {...params} />
          )}
        />
        <Route
          path="/LoginPage"
          render={({ history }) => (
            <LoginPage {...this.props} history={history} />
          )}
        />
        <Route
          path="/RegisterPage"
          render={({ history }) => (
            <RegisterPage {...this.props} history={history} />
          )}
        />
        <div className="pt-4">
          <MovieFooter />
        </div>
      </div>
    );
  }
}

export default App;
