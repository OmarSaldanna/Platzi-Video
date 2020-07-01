// cosas de react
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { propTypes } from 'prop-types';

// cosas de redux
import { connect } from 'react-redux';
import { registerRequest } from '../actions';

// estilos
import '../assets/styles/components/Register.scss';

const Register = props => {

  // iniciamos el state, alojando en este los datos del form
  const [form, setValues] = useState({ // setvalues es el metodo para cambiar el estado
    email: '',
    name: '',
    password: '',
  });

  // cada que se altera un input se altera el state
  const handleInput = event => {
    // alteramos el state
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  // accion para subir los datos
  const handleSubmit = event => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
  };

  return (
    <section className="register">
      <section className="register__container">
        <h2>Regístrate</h2>
        <form className="register__container--form" onSubmit={handleSubmit}>

          <input
            className="input"
            type="text"
            placeholder="Nombre"
            name="name"
            onChange={handleInput}
          />

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

          <button className="button">Registrarme</button>
        </form>
        <Link to="/login">Iniciar sesión</Link>
      </section>
    </section>
  );
};

// listamos las actions que necesitamos en el proyecto
const mapDispatchToProps = {
  registerRequest,
}

export default connect(null,mapDispatchToProps)(Register);
