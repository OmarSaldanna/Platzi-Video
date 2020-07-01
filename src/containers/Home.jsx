// importamos react y react hooks, imrse
import React from 'react';

// importamos cosas de redux
import { connect } from 'react-redux';

// components
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

// styles
import '../assets/styles/App.scss';

// ya no se usa la api, pasaremos por props los datos, mediante Redux
const Home = ({ mylist, trends, originals }) => {
    return (
    <>
      <Search />

      <Categories title="Mi Lista">
        <Carousel>
          {/* recorremos todo el estado de mylist */}
          {mylist.map((item) => (
            <CarouselItem
              key={item.id}
              {...item}
              isList={true}
            />
          ))}

        </Carousel>
      </Categories>

      <Categories title="Tendencias">
        <Carousel>
          {/* recorremos todo el estado de trends */}
          {trends.map((item) => (
            <CarouselItem
              key={item.id}
              {...item}
              isList={false}
            />
          ))}

        </Carousel>
      </Categories>

      <Categories title="Originales">
        <Carousel>
          {/* recorremos todo el estado de originals */}
          {originals.map((item) => (
            <CarouselItem
              key={item.id}
              {...item}
              isList={false}
            />
          ))}

        </Carousel>
      </Categories>

    </>
  );
};

// funcion que le va a indicar al provider que informacion necesitamos
// agarramos el estado de redux y se lo agregamos a props del componente
const mapStateToProps = (state) => {
  return{
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};


// conectamos el componente a redux
export default connect(mapStateToProps, null)(Home);
