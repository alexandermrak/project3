import React from "react";
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

import "./NavBar.css";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="navbar navbar bg-dark">
      <Link className="link" to="/">
        All Trips
      </Link>
      &nbsp; | &nbsp;
      <Link className="link" to="/new">
        New Trip
      </Link>
      &nbsp; | &nbsp;
      <span className="link">{user.name}</span>
      &nbsp; | &nbsp;
      <Link className="link" to="/" onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
  );
}
