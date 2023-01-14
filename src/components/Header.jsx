import React from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../pages/Menu";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white border-b sticky top-0 shadow-sm">
      <header className="flex justify-between px-3 max-w-6xl mx-auto">
        <div className="flex flex-wrap content-center">
          <h2 style={{ cursor:'pointer' }} className="font-semibold" onClick={()=>navigate("/")}>realtor.com</h2>
        </div>
        <div>
          <Menu />
        </div>
      </header>
    </div>
  );
};

export default Header;
