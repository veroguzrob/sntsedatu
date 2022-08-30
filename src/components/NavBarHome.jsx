import "../styles/NavBarHome.css";
import React from "react";
import { useNavigate } from 'react-router-dom';



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
    <nav>
      <div className="navbar-container">
        <button className="elements" onClick={moveToReleases}>COMUNICADOS</button>
        <button className="elements" onClick={moveToDirectory}>DIRECTORIO</button>
        <button className="elements" onClick={moveToDocuments}>DOCUMENTOS</button>
        <button className="elements" onClick={moveTotransparency}>TRANSPARENCIA</button>
        <button className="elements" onClick={moveToContact}>CONTACTO</button>
      </div>
    </nav>

  )
}
export default NavBarHome;