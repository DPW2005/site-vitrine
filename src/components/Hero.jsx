export default function Hero() {
  return (
    <section id="accueil" className="hero">
      <div className="hero__bg">
        <img
          src="/hero-bg.png"
          alt="Étudiants africains en blouse blanche dans un campus médical moderne"
          className="hero__bg-img"
          loading="eager"
        />
        <div className="hero__overlay"></div>
      </div>

      <div className="container hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot"></span>
          Inscriptions ouvertes 2025-2026
        </div>

        <h1 className="hero__title">
          Formez-vous à<br />
          <span className="hero__title-accent">l'Excellence</span> en Santé
        </h1>

        <p className="hero__subtitle">
          Rejoignez l'Institut Supérieure des Sciences en Santé de Ngong et bénéficiez d'un
          enseignement de qualité, d'infrastructures modernes et d'un encadrement
          par des professionnels de renommée internationale.
        </p>

        <div className="hero__actions">
          <a href="#formations" className="btn btn--primary btn--lg" onClick={(e) => {
            e.preventDefault();
            document.getElementById('formations')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}>
            Découvrir nos Formations
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#contact" className="btn btn--secondary btn--lg" onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}>
            Candidater
          </a>
        </div>
        <br />

        {/* Stats bar */}
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-number">+1500</span>
            <span className="hero__stat-label">Étudiants</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">10</span>
            <span className="hero__stat-label">Formations</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">98%</span>
            <span className="hero__stat-label">Réussite</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">3+</span>
            <span className="hero__stat-label">Ans d'Excellence</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel"></div>
        </div>
        <span>Défiler</span>
      </div>
    </section>
  );
}
