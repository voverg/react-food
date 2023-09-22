import { useFoodContext } from '../hooks/use-food-context.js';
import { CategoryItem } from './category-item.jsx';

export function CategoryList() {
  const {category} = useFoodContext();

  return (
    <ul className="category__list cards">
      {category.length
      ? category.map((item) => <CategoryItem key={item.id} {...item} />)
      : <h4 className="cards__not-found">Ничего не найдено</h4>}
    </ul>
  );
}