import { Outlet } from 'react-router-dom';

import { Header } from './header.jsx';
import { Main } from './main.jsx';
import { Footer } from './footer.jsx';

export function Layout() {
  return (
    <div className="app">
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
}