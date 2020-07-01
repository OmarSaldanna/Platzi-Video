import React from 'react';
import '../assets/styles/components/Categories.scss';

// ese children es como una palabra reservada es a fuerzas esa palabra,
// para que el componente pueda contener a otros como una caja en html
const Categories = ({ children, title }) => (
  <div className="categories">
    <h3 className="categories__title">{title}</h3>
    {children}
  </div>
);

export default Categories;
