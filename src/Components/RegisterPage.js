import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const RegisterPage = (props) => {
  const submitForm = (e) => {
    e.preventDefault();
    let username = e.target.elements.username.value;
    let password = e.target.elements.password.value;
    let user = { username, password };
    let findindex = props.users.findIndex((p) => p.username === username);
    if (findindex !== -1) {
      alert("UserName already Exit");
    } else if ((username !== "") & (password !== "")) {
      props.addUser(user);
      console.log(findindex);
      props.history.push("/LoginPage");
    } else {
      alert("please enter valid details");
    }
  };
  const inputTrigger = useRef(null);
  const [userDisabled, setUserDisabled] = useState(true);
  useEffect(() => {
    inputTrigger.current.focus();
  }, []);

  const triggerHandler = () => {
    if (inputTrigger.current.value !== "") {
      setUserDisabled(false);
    }
  };
  return (
    <div className="add-form">
      <h1>RegisterPage</h1>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="First Name"
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
          <span>Aleardy you have account?</span>
          <Link to="/LoginPage">Login</Link>
        </div>
      </form>
    </div>
  );
};
export default RegisterPage;
