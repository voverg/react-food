export function NotFound() {
  return (
    <section className="page">
      <div className="breadcrumbs">
        <Link to="/" className="breadcrumbs__link">Home</Link>
      </div>
      <h2 className="cards__not-found">Page not found component</h2>
    </section>
  );
}