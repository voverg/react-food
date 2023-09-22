import { useEffect } from 'react';
import { Api } from '../services/api.js';
import { useFoodContext } from '../hooks/use-food-context.js';
import { CatalogList } from '../components/catalog-list.jsx';
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
    <section className="catalog page">
      <h2 className="page__title">Catalog</h2>
      {loading  ? <Loader /> : <CatalogList />}
    </section>
  );
}
