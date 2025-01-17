import React, { useState, useContext } from "react";

import { Link, useNavigate } from "react-router-dom";

import Login from "../../pages/login/login";
import RegisterUser from "../../pages/register/registerUser";
import { AuthContext } from "../../context/AuthContext";

import ModalCart from "../../pages/modalCart/modalCart";

const Header = () => {

  const [activeDiv, setActiveDiv] = useState(null);
  const userData = JSON.parse(localStorage.getItem("usuario"));

  const { isAuthenticated, login, logout } = useContext(AuthContext);

  // Función que cambia el estado del div clickeado
  const handleClick = (index) => {
    setActiveDiv(index);
  };

  const getDivStyle = (index) => ({
    borderBottom: activeDiv === index ? "4px solid #EBF172" : "",
    cursor: "pointer",
  });

  return (
    <div className="h-14  px-10 text-xl">
      <div className="flex w-full gap-2 h-full ">
        <Link to={`/`} className="w-1/3 ">
          <div className="h-full w-40 bg-bgSecondary border-4 border-white flex items-center justify-center text">
            FooDelivery
          </div>
        </Link>
        <div className="w-2/3 flex justify-center flex-wrap content-center h-full">
          <div className="flex gap-8">
            <Link
              to={`/`}
              style={getDivStyle(0)}
              onClick={() => handleClick(0)}
              className="hover:text-gray-400"
            >
              Find Foond
            </Link>
            <Link
              to={`/categories`}
              style={getDivStyle(1)}
              onClick={() => handleClick(1)}
              className="hover:text-gray-400"
            >
              Categories
            </Link>
            <Link
              to={`/restaurants`}
              style={getDivStyle(2)}
              onClick={() => handleClick(2)}
              className="hover:text-gray-400"
            >
              Restaurant
            </Link>
          </div>
        </div>
        <div className="w-1/4  h-full">
          <div className="flex  justify-end flex-wrap content-center h-full gap-6">


            <div className="w-12 text-2xl flex items-center">
              <ModalCart />
            </div>
            
            {isAuthenticated ? (
              <>
              
              <div className="dropdown dropdown-end ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar avatar online"
              >
                <div className="w-12 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link  to={`/count`}>
                    <a className="justify-between">
                    Profile
                      <span className="badge">New</span>
                    </a>
                  </Link>
                </li>

                <li>
                <Link  to={`/count`}>
                    <a className="justify-between">
                    Settings
                    </a>
                  </Link>
                </li>

                <li>
                  <Link  to={`/count`}>
                    <a className="justify-between">
                       Logout
                    </a>
                  </Link>
                </li>

              </ul>
            </div>
              
             
            </>
            ) : (
              <>
                <div
                  style={getDivStyle(3)}
                  onClick={() => handleClick(3)}
                  className="hover:text-gray-400"
                >
                  <Login />
                </div>
                <Link
                  to={`/register&user`}
                  style={getDivStyle(0)}
                  onClick={() => handleClick(4)}
                  className="hover:text-gray-400"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );

};

export default Header;
