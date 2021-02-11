import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAppleAlt,
  faTachometerAlt,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./sidebar.css";

export const Sidebar = () => {
  const { email } = useSelector((state) => state.auth);
  return (
    <div className="box-sidebar">
      <div className="avatar">{email}</div>
      <div className="box-item-sidebar">Buscar...</div>
      <ul>
        <li className="box-item-sidebar">
          <FontAwesomeIcon icon={faTachometerAlt} size="lg" />
          <Link to="/dashboard/categories">Categories</Link>
        </li>
        <li className="box-item-sidebar">
          <FontAwesomeIcon icon={faAppleAlt} size="lg" />
          <Link to="/dashboard/menus">Menus</Link>
        </li>
        <li className="box-item-sidebar">
          <FontAwesomeIcon icon={faUserAlt} size="lg" />
          <Link to="/dashboard/clientes">Clientes</Link>
        </li>
      </ul>
    </div>
  );
};
