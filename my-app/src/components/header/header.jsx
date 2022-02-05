import { NavLink } from "react-router-dom";
import { Nav } from "../nav/nav";
import "./header.scss";

export function Header() {
  return (
    <header className="header">
      <NavLink className="header_logo" to="/">
        My E-Shop
      </NavLink>          
      <Nav />
      <img className="header_buy_car" src="https://image.flaticon.com/icons/png/512/107/107831.png"></img>
    </header>
  );
}
