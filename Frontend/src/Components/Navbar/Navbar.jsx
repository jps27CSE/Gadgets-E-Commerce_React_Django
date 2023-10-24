import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const { user, userSignOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [darkTheme, setDarkTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
  useEffect(() => {
      localStorage.setItem("theme", darkTheme)
      const savedTheme = localStorage.getItem("theme")
      document.querySelector("html").setAttribute("data-theme", savedTheme)
  }, [darkTheme])
  const handleTheme = event => {
      if (event.target.checked) {
          setDarkTheme("dark")
      }
      else {
          setDarkTheme("light")
      }
  }

  const handleLogin = () => {
    navigate("/login");
  };
  const handleLogout = () => {
    userSignOut()
      .then(navigate("/login"))
      .catch((err) => console.log(err.message));
  };
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " text-teal-700 bg-teal-300 rounded-md font-bold"
              : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/products"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " text-teal-700 bg-teal-300 rounded-md font-bold"
              : ""
          }
        >
          Products
        </NavLink>
      </li>
    </>
  );


 

  return (
    <div className="">
      <div className="navbar bg-teal-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              onClick={() => setOpen(!open)}
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className={` dropdown-content mt-3 p-2 z-[1] ${
                open ? "" : "hidden"
              } shadow bg-base-100 rounded-lg w-52`}
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="font-logoFont btn-ghost btn text-xl">
            <span className="text-teal-500">Gadget</span> Store
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          {/* dark mode */}
          <div className='mr-2 mt-2'>
                        <label className="swap swap-rotate">

                            {/* this hidden checkbox controls the state */}
                            <input  onChange={handleTheme} type="checkbox" />

                            {/* sun icon */}
                            <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            {/* moon icon */}
                            <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                        </label>
                    </div>
          {user ? (
            <div className="flex items-center space-x-3">
              <div className="">
                <img
                  className="w-7 lg:w-10 h-7 lg:h-10 rounded-full ml-4 lg:ml-2"
                  src={user?.photoURL}
                  alt=""
                />
                <p className="text-xs font-logoFont text-center">
                  {user?.displayName}
                </p>
              </div>
              <button
                onClick={handleLogout}
                className="px-2 py-1 text-sm lg:text-base lg:px-5 lg:py-2 border hover:border-teal-700 border-teal-300 hover:bg-teal-400 hover:text-black font-medium rounded-md"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="flex items-center">
              <img
                className="w-7 lg:w-10 h-7 lg:h-10 rounded-full mr-3"
                src="https://i.ibb.co/By0YFNn/default-profile-picture-grey-male-icon.png"
                alt=""
              />
              <button
                onClick={handleLogin}
                className="px-2 py-1 text-sm lg:text-base lg:px-5 lg:py-2 bg-teal-600 hover:bg-teal-400 hover:text-black text-white rounded-md"
              >
                Sign In
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
