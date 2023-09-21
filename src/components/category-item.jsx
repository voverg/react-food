import { Link } from 'react-router-dom';

export function CategoryItem({id, title, img}) {
  // const goodsItemImgPath = poster === 'N/A' ? `https://placehold.co/300x400?text=${title}` : poster;

  return (
    <li className="cards__item" id={id}>
      <Link to={id}>
        <img src={img} alt="image" className="cards__img" />
        <h4 className="cards__title">{title}</h4>
      </Link>
    </li>
  );
}