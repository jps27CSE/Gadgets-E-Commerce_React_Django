import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const { user, userSignOut } = useContext(AuthContext);
  const navigate = useNavigate();

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
