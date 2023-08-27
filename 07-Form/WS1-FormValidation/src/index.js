// import <ITEM> from <LIB_NAME>

//Import from node_modules
import React, { useState } from "react";
import { createRoot } from "react-dom/client";

//Import from our own JS files
import Item from "./components/Item.js";
import "./index.css";

const App = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passCheck, setPassCheck] = useState("");

  const [isPassMatch, setMatch] = useState(false);

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

  const checkPassword = (pass, passCheck) => {
    if (pass == passCheck) {
      return true;
    }
    return false;
  };

  let a = (checkPassword(pass,passCheck))
  if(a){
    setMatch(true)
  }

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
        <input
          type="password"
          placeholder="Password"
          onChange={handlePass}
          value={pass}
        />
        <input
          className={passCheck == pass ? "" : "redBg"}
          type="password"
          placeholder="Confirm your password"
          onChange={handlePassCheck}
          value={passCheck}
        />
        <button type="submit">Request OTP</button>
      </form>
    </div>
  );
};

// ReactDOM
const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
