import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " text-teal-700 bg-teal-200 rounded-md font-bold"
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
              ? " text-teal-700 bg-teal-200 rounded-md font-bold"
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
        <div className="navbar-end">
          <Link
            to="/login"
            className="px-5 py-2 bg-teal-300 font-medium rounded-lg hover:bg-teal-600 hover:text-white"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
