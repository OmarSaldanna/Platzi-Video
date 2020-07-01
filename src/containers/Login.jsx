// cosas de react
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// cosas de redux
import { connect } from 'react-redux'
import { loginRequest } from '../actions'

// estilos e imagenes
import '../assets/styles/components/Login.scss'
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Login = (props) => {
  // abrimos el state del componente
  const [ form, setValues] = useState({
    email: '',
  });

  // funcion para los inputs
  const handleInput = (event) => {
    // alojamos los valores en el state
    setValues ({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // mandamos al state la info del login
    props.loginRequest(form);
    // como usamos el enrutador tenemos disponible el history, para redireccionar
    props.history.push('/');
  }

  return (
    <section className="login">
      <section className="login__container">
        <h2>Inicia sesión</h2>
        <form className="login__container--form" onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            placeholder="Correo"
            name="email"
            onChange={handleInput}
          />
          <input
            className="input"
            type="password"
            placeholder="Contraseña"
            name="password"
            onChange={handleInput}
          />
          <button className="button">Iniciar sesión</button>
          <div className="login__container--remember-me">
            <label>
              <input type="checkbox" id="cbox1" value="first_checkbox" />Recuérdame
          </label>
            <a href="/">Olvidé mi contraseña</a>
          </div>
        </form>
        <section className="login__container--social-media">
          <div><img src={googleIcon} /> Inicia sesión con Google</div>
          <div><img src={twitterIcon} /> Inicia sesión con Twitter</div>
        </section>
        <p className="login__container--register">No tienes ninguna cuenta
        <Link to="/register">Regístrate</Link>
        </p>
      </section>
    </section>
  );
};

// traemos las acciones para redux
const mapDispatchToProps = {
  loginRequest,
};

// export default Login;
export default connect(null,mapDispatchToProps)(Login);
