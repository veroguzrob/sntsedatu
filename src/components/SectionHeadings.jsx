import '../styles/SectionHeadings.css';
import React from "react";
import { useNavigate } from 'react-router-dom';

export const SectionReleases = () => {
  const navigate = useNavigate()
  const moveToReleases = () => {
    navigate("/comunicados")
  };

  return (
    <section className='container-section'>
      <p className="tittle-section">Comunicados</p>
      <hr />
      <div className='container-info'></div>
      <p className='go-to' onClick={moveToReleases}>Ver mas</p>
    </section>
  )
}

export const SectionDirectory = () => {
  const navigate = useNavigate()
  const moveToDirectory = () => {
    navigate("/directorio")
  };
  return (
    <section className='container-section'>
      <p className="tittle-section">Directorio</p>
      <hr />
      <div className='container-info'></div>
      <p className='go-to' onClick={moveToDirectory}>Ver mas</p>
    </section>
  )
}

export const SectionDocuments = () => {
  const navigate = useNavigate()
  const moveToDocuments = () => {
    navigate("/documentos")
  };

  return (
    <section className='container-section'>
      <p className="tittle-section">Documentos</p>
      <hr />
      <div className='container-info'></div>
      <p className='go-to' onClick={moveToDocuments}>Ver mas</p>
    </section>
  )
}

export const SectionTransparency = () => {
  const navigate = useNavigate()
  const moveTotransparency = () => {
    navigate("/transparencia")
  };

  return (
    <section className='container-section'>
      <p className="tittle-section">Transparencia</p>
      <hr />
      <div className='container-info'></div>
      <p className='go-to' onClick={moveTotransparency}>Ver mas</p>
    </section>
  )
}

export const SectionContact = () => {
  const navigate = useNavigate()
  const moveToContact = () => {
    navigate("/contacto")
  };

  return (
    <section className='container-section'>
      <p className="tittle-section">Contacto</p>
      <hr />
      <div className='container-info'></div>
      <p className='go-to' onClick={moveToContact}>Ver mas</p>
    </section>
  )
}