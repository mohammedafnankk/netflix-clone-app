import React, { useState } from "react";
import { auth } from "../../../Firebase/config";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Signlogin.css";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/home");
        })
        .catch((error) => {
          alert(
            "You are not signed up to this app with this account.Please check your email and password"
          );
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="loginbody">
      <div className=" login-container ">
        <div className="login">
          <div className="sign-in">
            <h1>Sign In</h1>
            <form action="" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email or mobile number"
                className=""
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <br /> <br />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              <div className="btn-sign">
                <button type="submit">Sign In</button>
              </div>
              <p className="or">OR</p>
              <div className="btn-code">
                <button className="btn">Use a sign-in code</button>
              </div>
            </form>
          </div>
          <br />
          <a href="#" className="forgot">
            Forgot password?
          </a>
          <br /> <br />
          <div className="more">
            <input type="checkbox" className="remember" />{" "}
            <span>Remember me</span>
            <p className="new">
              New to Netflix?
              <Link to="/">Sign up now.</Link>
            </p>
            <p className="protected">
              This page is protected by Google reCAPTCHA to <br /> ensure you're
              not a bot.{" "}
              <a href="https://policies.google.com/privacy">learn more.</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
