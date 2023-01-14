import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();
  console.log("location", location);

  const getPathName = ()=>{
    const pathName = location.pathname;
    return pathName;
  }
  console.log('getPathName',getPathName() );
  return (
    <>
      <ul className="flex space-x-10">
        <li className={`py-3 text-sm font-semibold text-gray-500 border-b-[3px] border-b-transparent ${getPathName() === "/" ? 'border-b-red-700 text-gray-900' : 'border-b-transparent'}`}>
          <Link to="/">Home</Link>
        </li>
        <li className={`py-3 text-sm font-semibold text-gray-500 border-b-[3px] border-b-transparent ${getPathName() === "/profile" ? 'border-b-red-700 text-gray-900' : 'border-b-transparent'}`}>
          <Link to="/profile">Profile</Link>
        </li>
        <li className={`py-3 text-sm font-semibold text-gray-500 border-b-[3px] border-b-transparent ${getPathName() === "/offer" ? 'border-b-red-700 text-gray-900' : 'border-b-transparent'}`}>
          <Link to="/offer">Offer</Link>
        </li>
        <li className={`py-3 text-sm font-semibold text-gray-500 border-b-[3px] border-b-transparent ${getPathName() === "/sign-in" ? 'border-b-red-700 text-gray-900' : 'border-b-transparent'}`}>
          <Link to="/sign-in">Signin</Link>
        </li>
        <li className={`py-3 text-sm font-semibold text-gray-500 border-b-[3px] border-b-transparent ${getPathName() === "/sign-up" ? 'border-b-red-700 text-gray-900' : 'border-b-transparent'}`}>
          <Link to="/sign-up">Signup</Link>
        </li>
        <li className={`py-3 text-sm font-semibold text-gray-500 border-b-[3px] border-b-transparent ${getPathName() === "/forgote-password" ? 'border-b-red-700 text-gray-900' : 'border-b-transparent'}`}>
          <Link to="/forgote-password">Forgotpassword</Link>
        </li>
      </ul>
    </>
  );
};

export default Menu;
