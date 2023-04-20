import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Provider/AuthProvider";

const Header = () => {
  const { user, logOut, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(result => {
        setUser(null);
      })
      .catch(err => console.log(err));
  };
  return (
    <div className="max-w-7xl mx-auto px-2">
      <div className="navbar bg-base-100 justify-between">
        <div>
          <a className="btn btn-ghost normal-case text-xl">Bear Plus</a>
        </div>
        <div>
          <ul className="flex gap-5">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className="">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="" alt="Profile pic not found" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>{user.displayName}</a>
                </li>
                <li>
                  <a>Profile</a>
                </li>

                <li onClick={handleLogOut}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="btn btn-primary"
            >
              Get Started
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
