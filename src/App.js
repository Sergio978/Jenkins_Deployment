import React from 'react';
import './HomePage.css'; // Archivo CSS para estilos personalizados
import logo from './logo.png'; // Ruta de la imagen del logo

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
  }

  render() {
    const { isMenuOpen } = this.state;

    return (
      <div>
        <nav>
          <div className="header">
            <div className="logo">
              <img src={logo} alt="Logo Odontología" />
              <h2 className="logo-name">ODONTO</h2>
            </div>
            <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={this.toggleMenu}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
          <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
            <li><a href="/">Inicio</a></li>
            <li><a href="/reservar">Reservar Cita</a></li>
            <li><a href="/informacion">Consultar Información</a></li>
          </ul>
        </nav>
        <div className="content">
          <h1>Bienvenido a nuestra clínica dental</h1>
          <p>Ofrecemos servicios de calidad para el cuidado de tus dientes.</p>
          <div className="buttons">
            <button className="btn-cta">Reservar Cita</button>
            <button className="btn-info">Más Información</button>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;

