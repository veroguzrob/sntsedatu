import "../styles/NavBarClose.css";
import React from "react";
import { useNavigate } from 'react-router-dom';
import { AiOutlineClose } from "react-icons/ai";

const NavBarClose = () => {
  const navigate = useNavigate()

  const moveToHome = () => {
    navigate("/")
  };


  return (
    <nav>
      <div className="navbarclose-container">
        <button className="close" onClick={moveToHome}> <AiOutlineClose className="icon-close" /> </button>
      </div>
    </nav>

  )
}
export default NavBarClose;