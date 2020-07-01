// las acciones envian datos desde la app al store
// creamos y exportamos una accion de redux, payload es la informacion
export const setFavorite = (payload) => ({ // retornamos esto
  // type es el nombre de la accion a ejecutar
  type: 'SET_FAVORITE',
  // es la informacion que mandamos al reducer
  payload,
});

// fucnion para eliminar favoritos
export const deleteFavorite = (payload) => ({
  type: 'DELETE_FAVORITE',
  // payload: payload,
  payload,
});

// funcion para manejar info del login
export const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

// funcion para hacer un logout
export const logoutRequest = (payload) => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

// funcion para registrar
export const registerRequest = (payload) => ({
  type: 'REGISTER_REQUEST',
  payload,
});

// obtener el source de un video
export const getVideoSource = (payload) => ({
  type: 'GET_VIDEO_SOURCE',
  payload,
});
