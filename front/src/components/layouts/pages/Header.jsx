import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <img src="" alt="Logo" />
      <nav>
        <Link to="">Inicio</Link>
        <Link to="">Empleados</Link>
        <Link to="">Productos</Link>
      </nav>
      <Link to="/">Cerrar Sesion</Link>
    </header>
  );
};

export default Header;
