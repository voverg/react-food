import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { ContextProvider } from './store/context.jsx';
import { Layout } from './layouts/layout.jsx';
import { Home } from './pages/home.jsx';
import { Category } from './pages/category.jsx';
import { Meal } from './pages/meal.jsx';
import { NotFound } from './pages/not-found.jsx';

import './app.css';

export function App() {
  return (
    <ContextProvider>
      <BrowserRouter basename="/react-food">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="category/:title" element={<Category />} />
            <Route path="category/:categoryTitle/:id" element={<Meal />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}