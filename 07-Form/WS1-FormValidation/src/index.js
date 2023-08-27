// import <ITEM> from <LIB_NAME>

//Import from node_modules
import React, { useState } from "react";
import { createRoot } from "react-dom/client";

//Import from our own JS files
import "./index.css";

const App = () => {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState("");

  const [pass, setPass] = useState("");
  const [passCheck, setPassCheck] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePass = (e) => {
    setPass(e.target.value);
  };

  const handlePassCheck = (e) => {
    setPassCheck(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  return (
    <div className="app">
      <h1>Sign Up</h1>
      <form className="form_register" onClick={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          onChange={handleEmail}
          value={email}
        />
        <p className="alert">{`${
          email.includes("@") && email.includes(".com") && email.length > 5 ? "" : "Not an Email"
        }`}</p>
        <input
          type="text"
          placeholder="Password"
          onChange={handlePass}
          value={pass}
        />
        <input
          className={passCheck !== pass && passCheck.length > 4 ? "redBg" : ""}
          type="text"
          placeholder="Confirm your password"
          onChange={handlePassCheck}
          value={passCheck}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

// ReactDOM
const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
