import { NavLink } from "react-router-dom";

import "./nav.scss";
export function Nav() {
  return (
    <nav className="nav">
      <ul>        
        <li>
          <NavLink to="/home" activeClassName="is-active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/catalog" activeClassName="is-active">
            Catalog
          </NavLink>
        </li>
        <li>
          <NavLink to="/delivery" activeClassName="is-active">
            Delivery
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="is-active">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="is-active">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
