import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Main.css";
import AuthContext from "../../context/auth-context";

export default function MainNavigation() {
  const { token, logout } = useContext(AuthContext);

  return (
    <header className="main-navigation">
      <div className="main-navigation_logo">
        <h1>Eventopalooza</h1>
      </div>
      <nav className="main-navigation_items">
        <ul>
          {!token && (
            <li>
              <NavLink to="/auth">Authenticate</NavLink>
            </li>
          )}
          <li>
            <NavLink to="/events">Events</NavLink>
          </li>
          {token && (
            <React.Fragment>
              <li>
                <NavLink to="/bookings">Bookings</NavLink>
              </li>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            </React.Fragment>
          )}
        </ul>
      </nav>
    </header>
  );
}
