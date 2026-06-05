const VALUES = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5">
        <circle cx="24" cy="24" r="20" opacity="0.15" fill="currentColor" stroke="none" />
        <path d="M24 12v24M12 24h24" strokeLinecap="round" />
      </svg>
    ),
    title: 'Excellence Académique',
    text: 'Des programmes rigoureux alignés sur les standards internationaux les plus exigeants.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5">
        <circle cx="24" cy="24" r="20" opacity="0.15" fill="currentColor" stroke="none" />
        <path d="M16 24l4 4 12-12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Innovation Pédagogique',
    text: 'Méthodes d\'enseignement modernes intégrant simulation, e-learning et pratique clinique.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5">
        <circle cx="24" cy="24" r="20" opacity="0.15" fill="currentColor" stroke="none" />
        <path d="M24 14c-6 0-10 4-10 8s4 8 10 8 10-4 10-8-4-8-10-8z" strokeLinecap="round" />
        <circle cx="24" cy="22" r="3" />
      </svg>
    ),
    title: 'Humanisme',
    text: 'Former des professionnels de santé empathiques, engagés envers leurs communautés.',
  },
];

export default function Administration() {
  return (
    <section id="administration" className="section">
      <div className="container">
        <div className="section__header reveal">
          <span className="section__badge">Administration</span>
          <h2 className="section__title">Direction & Gouvernance</h2>
          <p className="section__subtitle">
            Une équipe de direction expérimentée et visionnaire, guidée par l'ambition
            de former l'élite médicale africaine.
          </p>
        </div>

        {/* Dean's message */}
        <div className="admin__dean reveal">
          <div className="admin__dean-visual">
            <div className="admin__dean-img-wrapper">
              <div className="admin__dean-img-placeholder">
                <span>👨‍⚕️</span>
              </div>
            </div>
            <div className="admin__dean-decoration"></div>
          </div>
          <div className="admin__dean-content">
            <span className="admin__dean-label">Mot du Doyen</span>
            <h3 className="admin__dean-name">Pr. Jean-Baptiste Mensah</h3>
            <p className="admin__dean-role">Doyen de la Faculté — Professeur Titulaire en Chirurgie</p>
            <blockquote className="admin__dean-quote">
              « Notre engagement est de fournir à chaque étudiant les compétences,
              les connaissances et les valeurs nécessaires pour devenir un professionnel
              de santé accompli. L'I3SN n'est pas simplement une école, c'est une famille
              qui accompagne chaque futur praticien dans son parcours vers l'excellence. »
            </blockquote>
            <div className="admin__dean-signature">
              <div className="admin__dean-line"></div>
              <span>Pr. J-B. Mensah</span>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="admin__values reveal">
          <h3 className="admin__values-title">Nos Valeurs Fondamentales</h3>
          <div className="admin__values-grid">
            {VALUES.map((value, i) => (
              <div key={i} className={`admin__value-card stagger-${i + 1}`}>
                <div className="admin__value-icon">{value.icon}</div>
                <h4 className="admin__value-title">{value.title}</h4>
                <p className="admin__value-text">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
