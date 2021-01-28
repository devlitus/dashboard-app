import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export const Sidebar = () => {
  return (
    <div className="box-sidebar">
      <div className="avatar">Usuario</div>
      <div className="box-item-sidebar">Buscar...</div>
      <div className="box-item-sidebar">
        <Link to="/dashboard/categories">Categories</Link>
      </div>
      <div className="box-item-sidebar">
        <Link to="/dashboard/menus">Menus</Link>
      </div>
      <div className="box-item-sidebar">
        <Link to="/dashboard/clientes">Clientes</Link>
      </div>
    </div>
  );
};
