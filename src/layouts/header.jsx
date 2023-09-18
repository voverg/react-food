import { BrowserRouter, Routes, Route, Link, } from "react-router-dom";

import { Home } from '../pages/home.jsx';
import { About } from '../pages/about.jsx';
import { Contact } from '../pages/contact.jsx';

export function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <h1 className="header__title">Food</h1>

        <nav className="header__nav">
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}