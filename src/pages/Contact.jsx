import Tittle from '../components/Tittle';
import NavBarClose from '../components/NavBarClose';
import NavBarFooter from '../components/NavBarFooter';
import '../styles/Contact.css';


const Contact = () => {
  return (
    <>
      <header>
        <Tittle />
        <NavBarClose />
      </header>
      <main>
        <section className='container-contacts'>
          <div className='container-grid'>
            <div>
              <p className='tittle-contact'>Direccion:</p>
              <p className='contact'>Av. Insurgentes Nte. 106 <br />Col. Sta María la Ribera <br />Alc. Cuauhtémoc, CP. 06400 <br />Ciudad de México, CDMX.</p>
            </div>
            <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.278669873589!2d-99.15694968582523!3d19.443548445370467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8d070435631%3A0x129c0326fda8aaed!2sAv.%20Insurgentes%20Nte.%20106%2C%20Sta%20Mar%C3%ADa%20la%20Ribera%2C%20Cuauht%C3%A9moc%2C%2006400%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1662256258107!5m2!1ses!2smx" />
            <div>
              <p className='tittle-contact'>Telefonos:</p>
              <p className='contact'>55 2530 4078<br />55 2145 7896</p>
            </div>
            <div>
              <a className='link-contact' href="https://www.facebook.com/sntsedatu.cen">Facebook</a>
              <a className='link-contact' href="https://www.facebook.com/sntsedatu.cen">Twitter</a>
              <a className='link-contact' href="https://www.facebook.com/sntsedatu.cen">Pinterest</a>
            </div>
          </div>
        </section>      </main>
      <footer>
        <NavBarFooter />
      </footer>
    </>
  )
}

export default Contact;