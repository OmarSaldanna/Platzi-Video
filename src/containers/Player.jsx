// cosas de react
import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

// cosas de redux
import { connect } from 'react-redux';
import { getVideoSource} from '../actions';

// estilos e imagenes
import '../assets/styles/components/Player.scss';
import NotFound from '../containers/NotFound';

const Player = props => {
  // obtenemos la id de la url
  const { id } = props.match.params;
  
  // si existe el video, si no regreso vacio
  let hasPlaiyng = Object.keys(props.playing) > 0;

  // buscamos en props
  const result = props.playing;

  // usamos useEffect para realizar algo dentro del componente
  useEffect(() => {
    props.getVideoSource(id);
  }, []);

  if(result.length === 0) { return <NotFound /> }

  return (
    <div>
      <video controls autoPlay >
        <source src={result.source} type="video/mp4" />
      </video>
      <div className="Player-back">
        <button type="button" onClick={() => props.history.goBack()}>
          Regresar 
        </button>
      </div>
    </div>
  );
};

// lista de actions para props
const MapDispatchToProps = {
  getVideoSource,
};

// con que nombre y que del state va a estar en props
const mapStateToProps = state => {
  return {
    playing: state.playing
  };
};

// con connect pasamos a props cosas de redux, como algo del state, actions
export default connect(mapStateToProps,MapDispatchToProps)(Player);
// connect(mapStateToProps - funcion que retorna state, MapDispatchToProps - objeto con lsita de actions importadas)(component)
