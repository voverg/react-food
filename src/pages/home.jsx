import { useEffect } from 'react';
import { Api } from '../services/api.js';
import { useFoodContext } from '../hooks/use-food-context.js';
import { CatalogItem } from '../components/catalog-item.jsx';
import { Loader } from '../components/loader.jsx';

export function Home() {
  const api = new Api();
  const {catalog, setCatalog, loading, setLoading} = useFoodContext();

  const getCatalog = () => {
    setLoading(true);
    api.getCatalog().then((data) => {
      setCatalog(data);
    }).catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    getCatalog();
  }, []);

  return (
    <section className="catalog">
      <ul className="catalog__list cards">
        {loading 
          ? <Loader />
          : <CatalogList catalog={catalog} />
        }
      </ul>
    </section>
  );
}


function CatalogList({catalog}) {
  return (
    <>
      {catalog.length
      ? catalog.map((item) => <CatalogItem key={item.id} {...item} />)
      : <h4 className="cards__not-found">Ничего не найдено</h4>}
    </>
  );
}