import "../styles/NavBarHome.css";
import React from "react";
import { useNavigate } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";


const NavBarHome = () => {
  const navigate = useNavigate()

  const moveToReleases = () => {
    navigate("/comunicados")
  };

  const moveToDirectory = () => {
    navigate("/directorio")
  };

  const moveToDocuments = () => {
    navigate("/documentos")
  };

  const moveTotransparency = () => {
    navigate("/transparencia")
  };

  const moveToContact = () => {
    navigate("/contacto")
  };

  return (
    <nav className="nav-menu">

      <input type="checkbox" name="" id="check" />
      <label for="check" class="checkbtn">
        <i class="menu-icon"><TiThMenu className="icon-hbg" /></i>
      </label>

      <ul>
        <li onClick={moveToReleases}>COMUNICADOS</li>
        <li onClick={moveToDirectory}>DIRECTORIO</li>
        <li onClick={moveToDocuments}>DOCUMENTOS</li>
        <li onClick={moveTotransparency}>TRANSPARENCIA</li>
        <li onClick={moveToContact}>CONTACTO</li>
      </ul>
    </nav>
  )
}
export default NavBarHome;