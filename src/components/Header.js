import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>CRUD APP</h1>
      <ul className="nav">
        <li>
          <NavLink to="/" end>Home</NavLink>
        </li>
        <li>
           <NavLink to="/Post/add">AddPost</NavLink>
        </li>
       <li className='login'>Login</li>
      </ul>
    </div>
  );
};

export default Header;
