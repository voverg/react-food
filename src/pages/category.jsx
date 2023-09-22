import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';

import { Api } from '../services/api.js';
import { useFoodContext } from '../hooks/use-food-context.js';
import { CategoryList } from '../components/category-list.jsx';
import { Loader } from '../components/loader.jsx';

export function Category() {
  const {title} = useParams();
  const api = new Api();
  const {category, setCategory, loading, setLoading} = useFoodContext();

  const getCategory = () => {
    setLoading(true);
    api.getCategory(title).then((data) => {
      setCategory(data);
    }).catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <section className="category page">
      <div className="breadcrumbs">
        <Link to="/" className="breadcrumbs__link">Home</Link>
        <span className="breadcrumbs__arrow">&nbsp;>&nbsp;</span>
        <span className="breadcrumbs__text">{title}</span>
      </div>
      <h2 className="page__title">Category {title}</h2>
      {loading ? <Loader /> : <CategoryList />}
    </section>
  );
}


