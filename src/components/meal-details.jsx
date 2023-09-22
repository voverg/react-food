export function MealDetails({meal}) {
  return (
    <>
      <div className="meal__details">
        <img src={meal.img} alt={meal.title} className="meal__img details__item" />
        <div className="meal__products details__item">
          <h3 className="recipe__title">Ingredients</h3>
          {meal.description}
        </div>
      </div>
      <div className="meal__recipe">
        <h3 className="recipe__title">Recipe</h3>
        {meal.description}
      </div>
    </>
  );
}