import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/">
          <h1 className="header__title">Food</h1>
        </Link>
        <div className="header__description">Explore recipes from all over the world</div>
      </div>
    </header>
  );
}