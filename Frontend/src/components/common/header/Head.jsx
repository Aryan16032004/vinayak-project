import React, { useContext } from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { UserContext } from "../../Authentication/Context";
import { Link, useNavigate } from "react-router-dom";

const Head = () => {
  const { loggedInUser, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login"); // Navigate to the login page
  };

  return (
    <>
      <section className="head bg-teal-100 p-4">
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <div className="logo">
            <h1 className="text-2xl font-bold text-teal-400">Dr.Maths Institute</h1>
            <span className="text-teal-400">An institute of Mathematical Science</span>
          </div>
          <div>
           
          </div>
          {/* Authentication Buttons */}
          <div className="flex items-center gap-4">
            {loggedInUser ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 mt-0 bg-teal-400 text-white rounded hover:bg-teal-500"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 bg-teal-400 text-white rounded hover:bg-teal-500"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 bg-teal-400 text-white rounded hover:bg-teal-500"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Social Icons */}
          {/* <div className="flex gap-5 text-teal-400">
            <a href="https://www.instagram.com/mrrr._chaturvedi/" className="hover:text-teal-500">
              <FaInstagramSquare size={24} />
            </a>
            <a href="https://www.facebook.com/" className="hover:text-teal-500">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.youtube.com/@Dr.MathsInstitute" className="hover:text-teal-500">
              <IoLogoYoutube size={24} />
            </a>
            <a href="https://twitter.com/" className="hover:text-teal-500">
              <FaSquareXTwitter size={24} />
            </a>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Head;
