import { Link } from 'react-router-dom';

export function CatalogItem({id, title, description, img}) {
  // const goodsItemImgPath = poster === 'N/A' ? `https://placehold.co/300x400?text=${title}` : poster;
  const descrMaxLen = 80;
  const _description = description.length < descrMaxLen
    ? description
    : `${description.slice(0, descrMaxLen)}...`;
  const categoryLink = `category/${title}`;

  return (
    <li className="cards__item" id={id}>
      <Link to={categoryLink}>
        <img src={img} alt="image" className="cards__img" />
        <h4 className="cards__title">{title}</h4>
        <p className="cards__description">{_description}</p>
      </Link>
    </li>
  );
}