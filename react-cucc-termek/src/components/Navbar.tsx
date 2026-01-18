import { NavLink } from "react-router-dom";
import { useLogin } from "../context/useLogin.js";

const Navbar = () => {
  const { user, logout } = useLogin()!;
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Contact
          </NavLink>
        </li>
        {user ? (
          <>
            <li>
              <NavLink to="/profile">
                Profile
              </NavLink>
            </li>
            <li>
              <button
                onClick={logout}
                className="logout-btn"
              >
                Kilépés
              </button>
            </li>
          </>
        ) : (
          <li>
            <NavLink to="/login">Belépés</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default Navbar;
