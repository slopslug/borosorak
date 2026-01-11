import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink
            to="/home"
            className="nav-link"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/products"
            className="nav-link"
          >
            Products
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/users"
            className="nav-link"
          >
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
