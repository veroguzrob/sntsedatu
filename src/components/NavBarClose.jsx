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
    <nav className="nav-menucls">
      <input type="checkbox" name="" id="check" />
      <label for="check" class="checkbtn">
        <i class="menu-iconcls" onClick={moveToHome}><AiOutlineClose className="icon-close" /></i>
      </label>
    </nav>
  )
}
export default NavBarClose;