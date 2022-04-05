import React from "react";
import { footer } from "react-bootstrap";
const MovieFooter = () => {
  return (
    <footer className="page-footer font-small mdb-color darken-3 pt-4">
      <div className="container text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase">Movie Posts</h5>
            <p>Entertainment is what makes you happy and feel relaxed.</p>
          </div>
          <hr className="clearfix w-100 d-md-none pb-3"></hr>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        © 2020 Copyright:
        <a href="/"> MoviesWood.com</a>
      </div>
    </footer>
  );
};
export default MovieFooter;
