// cosas de react
import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

// cosas de redux, la conexion y la accion que usamos en este componente
import { connect } from 'react-redux';
import { setFavorite, deleteFavorite } from '../actions';

// estilos e imagenes
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.png';

const CarouselItem = (props) => {
  // extraemos props
  const { id, cover, title, year, contentRating, duration, isList } = props;

  // funcion para activar la action de redux
  const handleSetFavorite = () => {
    props.setFavorite({
      id, cover, title, year, contentRating, duration,
    });
  };

  // funcion para activar la accion de eliminar de redux
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };

  // el componente
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <Link to={`/player/${id}`}>
            <img
              className="carousel-item__details--img"
              src={playIcon}
              alt="Play Icon"
            />
          </Link>
          {/* icono de agregar */}
          {/* <img
            className="carousel-item__details--img"
            src={plusIcon} alt="Plus Icon"
            // cada que se presione el btn de + se ejecutara la funcion de redux
            onClick={handleSetFavorite}
          /> */}

          {/* icono de eliminar */}
          {/* <img
            className="carousel-item__details--img"
            src={removeIcon} alt="Plus Icon"
            // cada que se presione el btn de + se ejecutara la funcion de redux
            onClick={() => handleDeleteFavorite(id)}
          /> */}

          {/* Boton */}
          {
            isList
              ? <img className="carousel-item__details--img"
                  src={removeIcon} alt="Plus Icon"
                  // cada que se presione el btn de + se ejecutara la funcion de redux 
                  onClick={() => handleDeleteFavorite(id)}
                />
              : <img
                  className="carousel-item__details--img"
                  src={plusIcon} alt="Plus Icon"
                  // cada que se presione el btn de + se ejecutara la funcion de redux 
                  onClick={handleSetFavorite}
                />
          }

        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};

// especificamos los proptypes
CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

// objeto con funciones para ejecutar una action en redux
const mapDispatchToProps = {
  // funcion de actions
  setFavorite,
  deleteFavorite,
}

// conectamos el componente a redux
export default connect(null, mapDispatchToProps)(CarouselItem);
