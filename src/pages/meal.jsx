import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Api } from '../services/api.js';
import { useFoodContext } from '../hooks/use-food-context.js';
import { Loader } from '../components/loader.jsx';

export function Meal() {
  const {loading, setLoading} = useFoodContext();
  const [meal, setMeal] = useState({});
  const {id} = useParams();
  const api = new Api();

  const getMeal = () => {
    setLoading(true);
    api.getMeal(id).then((data) => {
      console.log(data);
      setMeal(data);
      setLoading(false);
    }).catch((error) => {
      console.log(error);
      setLoading(false);
    });
  }

  useEffect(() => {
    getMeal();
  }, []);

  return (
    <section className="meal">
      {loading 
        ? <Loader />
        : <MealDetails meal={meal} />
      }
    </section>
  );
}


function MealDetails({meal}) {
  return (
    <>
      <h2 className="meal-title">{meal.title}</h2>
    </>
  );
}