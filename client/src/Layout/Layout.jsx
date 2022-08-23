import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "./layout.css";

export default function layout() {
  return (
    <>
      <header>
        <NavLink to="/My-finances">
          <img src={logo} alt="Logo"></img>
          <p>My finances</p>
        </NavLink>
      </header>
      <Outlet />
    </>
  );
}
