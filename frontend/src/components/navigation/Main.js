import React from "react";
import { NavLink } from "react-router-dom";
import "./Main.css";

export default function mainNavigation() {
  return (
    <header className="main-navigation">
      <div className="main-navigation_logo">
        <h1>Eventopalooza</h1>
      </div>
      <nav className="main-navigation_items">
        <ul>
          <li>
            <NavLink to="/auth">Authenticate</NavLink>
          </li>
          <li>
            <NavLink to="/events">Events</NavLink>
          </li>
          <li>
            <NavLink to="/bookings">Bookings</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
