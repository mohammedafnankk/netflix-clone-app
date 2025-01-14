import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/config";
// import { signOut } from 'firebase/auth';
import "./NavBar.css";
function NavBar() {
  const navigate = useNavigate();
  const logOut = async () => {
    auth.signOut().then(() => {
      navigate("/signlogin");
    });
    console.log("user logOut");
  };

  return (
    <div className="navbar">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <div className="dropdown">
        <button class="dropbtn">
          <i class="fa fa-caret-down"> </i>
        </button>
        <div class="dropdown-content">
          <button className="log-out" onClick={logOut}>
            Sign Out
          </button>
        </div>
      </div>

      <img
        className="avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
      />
    </div>
  );
}

export default NavBar;
