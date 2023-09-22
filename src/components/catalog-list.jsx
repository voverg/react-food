import { useFoodContext } from '../hooks/use-food-context.js';
import { CatalogItem } from './catalog-item.jsx';

export function CatalogList() {
  const {catalog} = useFoodContext();

  return (
    <ul className="catalog__list cards">
      {catalog.length
      ? catalog.map((item) => <CatalogItem key={item.id} {...item} />)
      : <h4 className="cards__not-found">Ничего не найдено</h4>}
    </ul>
  );
}