import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/auth";
import "./navbar.css";

export const Navbar = () => {
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    localStorage.clear();
  }
  return (
    <ul className="box-navbar">
      <li className="box-item-navbar">
        Menu
      </li>
      <li className="item-navbar">
        Email
      </li>
      <li className="item-navbar">
        Avatar
      </li>
      <li className="item-navbar" onClick={handleLogout}>
        Logout
      </li>
    </ul>
  );
};
