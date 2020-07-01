// creamos el reducer, que gestiona los estados mediante las acciones que le llegan
const reducer = (state, action) => {
  // switch para las acciones
  switch (action.type) {

    // si .. mandamos el state
    case 'SET_FAVORITE':
      return ({
        ...state,
        // le pasamos mylist de state, y el payload, que vendria siendo la informacion
        mylist: [...state.mylist, action.payload],
      });

    case 'DELETE_FAVORITE':
      return {
        ...state,
        // pasamos todos los items de milist descartando el id del que fue eliminado
        mylist: state.mylist.filter((items) => items.id !== action.payload),
      };

    case 'LOGIN_REQUEST':
      return {
        ...state,
        // pasamos el payload, que contiene la info del form
        user: action.payload,
      };

    case 'LOGOUT_REQUEST':
      return {
        ...state,
        // modificamos el estado mediante el payload
        user: action.payload,
      };

    case 'REGISTER_REQUEST':
      return {
        ...state,
        // alteramos el estado medainte el payload
        user: action.payload,
      };

    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        // buscamos en las listas de videos el id del video que vemos
        playing: state.trends.find((item) => item.id === Number(action.payload)) ||
        state.originals.find((item) => item.id === Number(action.payload)) ||
        state.milist.find((item) => item.id === Number(action.payload)) || [],
        // si no se encuentra mandar un vacio
      };

    // por default mandamos el state
    default:
      return state;
  }
};

export default reducer;
