import React, { useRef, useState, useContext } from "react";
import AuthContext from "../context/auth-context";
import "./Auth.css";

export default function Auth() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const { login } = useContext(AuthContext);

  const switchModeHandler = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const submitHandler = event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }

    let requestBody = {
      query: `
        query {
          login(email: "${email}", password: "${password}") {
            userId
            token
            tokenExpiration
          }
        }
      `
    };

    if (!isLoggedIn) {
      requestBody = {
        query: `
          mutation {
            createUser(userInput: {email: "${email}", password:"${password}"}){
              _id
              email
            }
          }
        `
      };
    }

    fetch("http://localhost:8000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed");
        }
        return res.json();
      })
      .then(res => {
        if (res.data.login.token) {
          login(
            res.data.login.token,
            res.data.login.userId,
            res.data.login.tokenExpiration
          );
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <form className="auth-form" onSubmit={event => submitHandler(event)}>
      <h2>{isLoggedIn ? "Login" : "Signup"}</h2>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" ref={emailRef} />
      </div>
      <div className="form-control">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={passwordRef} />
      </div>
      <div className="form-action">
        <button type="submit">Submit</button>
        <button type="button" onClick={switchModeHandler}>
          Switch to {isLoggedIn ? "Signup" : "Login"}
        </button>
      </div>
    </form>
  );
}
