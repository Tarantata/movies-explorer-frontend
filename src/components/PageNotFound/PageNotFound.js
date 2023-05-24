import "./PageNotFound.css";
import { Link } from "react-router-dom";
import React from "react";

function PageNotFound() {
   return (
      <section className="page-not-found">
         <div className="page-not-found__case">
            <h2 className="page-not-found__title">404</h2>
            <p className="page-not-found__subtitle">Страница не найдена</p>
            <Link to="/" className="page-not-found__link">
               Назад
            </Link>
         </div>
      </section>
   );
}

export default PageNotFound;
