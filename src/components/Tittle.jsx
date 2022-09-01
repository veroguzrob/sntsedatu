import "../styles/Tittle.css"
import logo from '../img/sedatu.jpg'
const Tittle = () => {
  return (
    <section className="container-tittle">
      <img src={logo} alt="logo" className="logo-snt" />
      <div className="tittle">
        <h1 className="t1">Sindicato Nacional</h1>
        <h2 className="t2">de Trabajadores de la Secretaría</h2>
        <h2 className="t2">de Desarrollo Agrario, Territorial y Urbano</h2>
      </div>

    </section>

  )
}

export default Tittle;