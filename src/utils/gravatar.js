// usando gravatar para almacenar imagenes
import md5 from 'md5';

const gravatar = (email) => {
  // url de gravatar
  const base = 'https://gravatar.com/avatar/';
  // formateamos el email
  const formatedEmail = (email).trim().toLowerCase();
  // generamos un hash
  const hash = md5(formatedEmail, { encoding: "binary" });
  // y pasamos la nueva url
  return `${base}${hash}`;
}

export default gravatar;