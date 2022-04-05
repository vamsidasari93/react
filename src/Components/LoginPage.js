import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const Loginpage = (props) => {
  const inputTrigger = useRef(null);
  const [userDisabled, setuserDisabled] = useState(true);
  useEffect(() => {
    inputTrigger.current.focus();
  }, []);
  const triggerHandler = () => {
    if (inputTrigger.current.value !== "") {
      setuserDisabled(false);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    let username = e.target.elements.username.value;
    let password = e.target.elements.password.value;
    let user = { username, password };
    let findindex = props.users.find((p) => p.username === username);

    if (findindex === undefined) {
      alert("user dosen't exit");
      e.target.elements.username.value = "";
      e.target.elements.password.value = "";
      setuserDisabled(true);
    } else {
      if (user.password !== findindex.password) {
        alert("password Incorrect");
        e.target.elements.username.value = "";
        e.target.elements.password.value = "";
        setuserDisabled(true);
      } else {
        props.CloggedIn(true);
        props.history.push("/");
      }
    }
  };

  return (
    <div className="add-form">
      <h1>Loginpage</h1>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          ref={inputTrigger}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={() => triggerHandler()}
        />
        <br />
        <button type="submit" disabled={userDisabled}>
          Submit
        </button>
        <div>
          <span>Don't you have account?</span>
          <Link to="/RegisterPage">Register</Link>
        </div>
      </form>
    </div>
  );
};
export default Loginpage;
