import './PageNotFound.css';

function PageNotFound() {
  return (
    <section className="page-not-found">
      <div className="page-not-found__case">
        <h2 className="page-not-found__title">404</h2>
        <p className="page-not-found__subtitle">Страница не найдена</p>
        <button className="page-not-found__button">Назад</button>
      </div>
    </section>
  );
}

export default PageNotFound;