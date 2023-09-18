import { useEffect, useContext } from 'react';

import { FoodContext } from '../store/context.jsx';
import { Loader } from '../components/loader.jsx';

import { Api } from '../services/api.js';

export function Main(props) {
  const {loading} = useContext(FoodContext);
  const api = new Api();

  // const getGoods = () => {
  //   api.getGoods().then((data) => {
  //     setGoods(data);
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  // }

  // useEffect(() => {
  //   getGoods();
  // }, []);

  return (
    <main className="main">
      <div className="container main__inner">
        {loading
          ? <Loader />
          : props.children
        }
      </div>
    </main>
  );

}

