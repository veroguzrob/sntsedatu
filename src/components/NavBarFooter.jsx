import '../styles/NavBarFooter.css';

const NavBarFooter = () => {
  return (
    <>
      <div className="container-footer">
        <p className='title-liks'>Enlaces</p>
        <div className="container-links">
          <div className='links1' >
            <a className='links-footer' href="http://www.gob.mx/sedatu">SEDATU</a>
            <a className='links-footer' href="https://www.gob.mx/issste">ISSSTE</a>
            <a className='links-footer' href="https://www.gob.mx/fovissste">FOVISSSTE</a>
            <a className='links-footer' href="https://www.gob.mx/pensionissste">PENSIONISSSTE</a>
            <a className='links-footer' href="https://oficinavirtual.issste.gob.mx/">SINAVID</a>
          </div>
          <div className='links2' >
            <a className='links-footer' href="https://sistemas.sedatu.gob.mx/e-recibos/#">E-RECIBOS</a>
            <a className='links-footer' href="https://mail.sedatu.gob.mx/">ZIMBRA</a>
          </div>
        </div>
      </div>
      <p className='registration'>©2022 by Sindicato Nacional de Trabajadores de la Secretaría de Desarrollo Agrario, Territorial y Urbano</p>
    </>
  )
}

export default NavBarFooter;