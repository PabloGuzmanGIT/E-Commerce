import { NavLink,fill } from "react-router-dom";
import { Nav } from "../nav/nav";
import "./header.scss";

export function Header() {
  return (
    <header className="header">
      <NavLink className="header_logo flex item-center justify-center" to="/">
        My E-Shop
      </NavLink>  
      <div className="flex flex-col">
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center border-2 rounded-bl-full w-full">
              <input type="text" className="header_input_search text-3xl text-black bg-cyan-50  w-full py-6 px-6 " placeholder="Search..."/>
              <button className="flex items-center justify-center px-8 py-8 border-l bg-cyan-50">
                  <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      <path
                          d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                  </svg>
              </button>
          </div>
        </div> 
        <Nav />
      </div>
      <div className="w-1/3 flex items-center">
        <NavLink className="header_login" to="/">
          Login
        </NavLink> 
        <img className="header_buy_car" src="https://image.flaticon.com/icons/png/512/107/107831.png"></img>
      </div>
      
    </header>
  );
}
