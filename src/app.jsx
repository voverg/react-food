import { BrowserRouter, Routes, Route, Link, } from "react-router-dom";

import { ContextProvider } from './store/context.jsx';

import { Header } from './layouts/header.jsx';
import { Main } from './layouts/main.jsx';
import { Footer } from './layouts/footer.jsx';

import { Home } from './pages/home.jsx';
import { About } from './pages/about.jsx';
import { Contact } from './pages/contact.jsx';
import { NotFound } from './pages/not-found.jsx';

import './app.css';

export function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <div className="app">
          <Header />
          <Main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Main>
          <Footer />
        </div>
      </BrowserRouter>
    </ContextProvider>
  );
}