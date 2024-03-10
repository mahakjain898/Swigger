import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useState } from "react";

const Header = () => {
  //   let btnName = 'Login';

  const [btnNameReact, setBtnNameReact] = useState("Login");
  // console.log('header render');
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-green-50 shadow-lg mb-3">
      <div className="p-3">
        <img
          src={LOGO_URL}
          alt="App Logo"
          className="rounded-xl opacity-70 h-24"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex m-4">
          <li className="px-3 font-semibold text-lg text-green-950">
            Online Status: {onlineStatus ? "✅" : "🔴"}{" "}
          </li>
          <li className="px-3 font-semibold text-lg text-green-950">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-3 font-semibold text-lg text-green-950">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3 font-semibold text-lg text-green-950">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-3 font-semibold text-lg text-green-950">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-3 font-semibold text-lg text-green-950">Cart</li>
          <button
            className="px-3 font-semibold text-lg text-green-950"
            onClick={() => {
              //   btnName = 'Logout';
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
