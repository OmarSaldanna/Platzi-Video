import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  // alojara en el estado de videos, mediante la funcion setVideos
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: [],
  });

  // hara la peticion a la api
  useEffect(() => {
    fetch(API)
      // obtenemos la respuesta
      .then((response) => response.json())
      // alojamos la respuesta en el estado
      .then((data) => setVideos(data));
  }, []);

  // devolvemos videos
  return videos;
};

export default useInitialState;
