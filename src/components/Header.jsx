// cosas de react
import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

// cosas de redux
import { connect } from 'react-redux';
import { logoutRequest } from '../actions';

// gravatar
import gravatar from '../utils/gravatar';

// estilos e imagenes
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {
  // obtenemos el user de props
  const { user } = props;
  // vemos si user no viene vacio
  const hasUser = Object.keys(user).length > 0;

  // funcion para cerrar sesion
  const handleLogout = () => {
    // pasamos un obj vacio para resetear el state.user
    props.logoutRequest({});
  }

  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {
            // si hay usuario mostrar la imagen, si no pues el icono
            hasUser
            ? <img src={gravatar(user.email)} alt={user.email}/>
            : <img src={userIcon} alt="Usiario" />
          }
          <p>Perfil</p>
        </div>
        <ul>
          { //
            hasUser
            ? <li><Link to="/">{user.name}</Link></li>
            : null
          }

          {// si hay usuario mostrar un cerrar sesion, si no, iniciar sesion
            hasUser
            ? <li><Link to="/#logout" onClick={handleLogout} >Cerrar Sesión</Link></li>
            : <li><Link to="/login">Iniciar Sesión</Link></li>
          }
          
        </ul>
      </div>
    </header>
  );
};

// validaciones con prop-types
Header.propTypes = {
  // el user debe de ser un objeto
  user: propTypes.object,
  // el logoutRequest debe ser una funcion
  logoutRequest: propTypes.func,
};

// que mandamos del state de redux por props
const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

// funciones para realizar acciones, pasadas por props
const mapDispatchToProps = {
  logoutRequest,
};

// export default Header;
export default connect(mapStateToProps, mapDispatchToProps)(Header);