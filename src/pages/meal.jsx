import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { Api } from '../services/api.js';
import { useFoodContext } from '../hooks/use-food-context.js';
import { MealDetails } from '../components/meal-details.jsx';
import { Loader } from '../components/loader.jsx';

export function Meal() {
  const {meal, setMeal, loading, setLoading} = useFoodContext();
  const {categoryTitle, id} = useParams();
  const api = new Api();

  const getMeal = () => {
    setLoading(true);
    api.getMeal(id).then((data) => {
      setMeal(data);
    }).catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    getMeal();
  }, [id]);

  return (
    <section className="meal page">
      <div className="meal__nav">
        <div className="breadcrumbs">
          <Link to="/" className="breadcrumbs__link">Home</Link>
          <span className="breadcrumbs__arrow">&nbsp;>&nbsp;</span>
          <Link to={`/category/${categoryTitle}`} className="breadcrumbs__link">{categoryTitle}</Link>
          <span className="breadcrumbs__arrow">&nbsp;>&nbsp;</span>
          <span className="breadcrumbs__text">{meal.title}</span>
        </div>
        <div className="meal__country">country:&nbsp;{meal.country}</div>
      </div>
      <h2 className="page__title">{meal.title}</h2> 
      {loading 
        ? <Loader />
        : <MealDetails meal={meal} />
      }
    </section>
  );
}
