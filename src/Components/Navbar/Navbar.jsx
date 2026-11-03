import React from "react";
import LogoImage from '../../assets/Logo/logo.png'
import { Link, NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineShoppingCart, MdShoppingCart } from "react-icons/md";
import { Info } from "lucide-react";
import { FaHome, FaJediOrder, FaPhone, FaPhoneAlt, FaUser, FaUserPlus } from "react-icons/fa";
import { RiShoppingBag4Fill } from "react-icons/ri";

const Navbar = () => {

   const navLinkClass = ({ isActive }) =>
    `transition-colors hover:text-green-600 ${
      isActive ? "text-green-600 font-semibold" : "text-gray-700"
    }`;


  const menuItem = (<>

    <li><Link to='/'><FaHome  className="text-blue-800 font-extrabold text-xl" />Home</Link></li>
    <li><Link to='/order'><RiShoppingBag4Fill className="text-blue-800 text-xl"/>Order</Link></li>
    <li><Link to='/trackOrder'><MdShoppingCart className="text-blue-800 text-xl"/>Track Order</Link></li>
    {/* <li><Link to='/about'> <Info className="text-blue-800 text-xl"/>About</Link></li> */}
    <li><Link><FaPhoneAlt className="text-blue-800 text-xl"/>Contact</Link></li>
  
  </>)
  return (
    <div>
      <div className="navbar fixed w-full shadow-sm  backdrop-blur-md  top-0 z-50 bg-gradient-to-r from-blue/65 via-sky-700/20 to-transparent ">
        {/* navbar start */}

        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
             
             {menuItem}
            </ul>
          </div>
          <div className="btn-ghost text-xl w-[60%] lg:w-[50%]">
            <img className="w-full" src={LogoImage} alt="" />
          </div>
        </div>
        {/* navbar center */}

        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-2 text-lg rounded-full bg-white py-0">
            
            {menuItem}
          </ul>
        </div>

        {/* navbar end */}

        <div className="navbar-end  gap-x-1 lg:gap-x-2 ">
          <Link className="btn   rounded-full bg-white text-blue-800 text-sm lg:text-lg"><FaUser className="text-sm lg:text-2xl" />Login</Link>
          <Link className="btn lg:btn text-blue-800 rounded-full bg-white text-sm lg:text-lg"><FaUserPlus className="text-sm lg:text-2xl"/>Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
