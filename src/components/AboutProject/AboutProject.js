import './AboutProject.css';

function AboutProject() {
  return (
    <section id="about-project" className="about-project">
      <div className="about-project__case">
        <h2 className="about-project__title">О проекте</h2>
        <div className="about-project__description">
          <div className="about-project__description-section">
            <h3 className="about-project__description-title">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__description-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="about-project__description-section">
            <h3 className="about-project__description-title">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__description-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="about-project__table">
          <p className="about-project__limit about-project__limit_one-week">1 неделя</p>
          <p className="about-project__limit about-project__limit_four-week">4 недели</p>
          <p className="about-project__limit-content">Back-end</p>
          <p className="about-project__limit-content">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;