export function MealDetails({meal}) {
  const products = meal.ingredients.map((product, index) => {
    return (
      <div className="products__row" key={index}>
        <div className="products__ingredient">{product.ingredient}</div>
        <div className="products__dots"></div>
        <div className="products__measure">{product.measure}</div>
      </div>
    );
  });

  return (
    <>
      <div className="meal__details">
        <img src={meal.img} alt={meal.title} className="meal__img details__item" />
        <div className="meal__products details__item">
          <h3 className="recipe__title">Products</h3>

          <div className="products__row products__row-header">
            <div className="products__ingredient">Ingredients</div>
            <div className="products__measure">Measure</div>
          </div>

          {products}

        </div>
      </div>
      <div className="meal__recipe">
        <h3 className="recipe__title">Recipe</h3>
        {meal.description}
      </div>
    </>
  );
}