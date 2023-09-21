import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { Api } from '../services/api.js';
import { useFoodContext } from '../hooks/use-food-context.js';
import { CategoryItem } from '../components/category-item.jsx';
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
    <section className="category">
      <ul className="category__list cards">
        {loading 
          ? <Loader />
          : <CategoryList category={category} />
        }
      </ul>
    </section>
  );
}


function CategoryList({category}) {
  return (
    <>
      {category.length
      ? category.map((item) => <CategoryItem key={item.id} {...item} />)
      : <h4 className="cards__not-found">Ничего не найдено</h4>}
    </>
  );
}