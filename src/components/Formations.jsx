const FORMATIONS = [
  {
    icon: '🩺',
    title: 'Médecine Générale',
    duration: '7 ans',
    diploma: 'Doctorat en Médecine',
    description: 'Formation complète en médecine avec stages cliniques intensifs dans nos hôpitaux partenaires. Couvre toutes les spécialités médicales fondamentales.',
    color: '#0A6E8A',
  },
  {
    icon: '🦷',
    title: 'Chirurgie Dentaire',
    duration: '6 ans',
    diploma: 'Doctorat en Chirurgie Dentaire',
    description: 'Maîtrisez l\'art dentaire dans nos cabinets de pratique équipés des dernières technologies. Formation en prothèse, orthodontie et chirurgie orale.',
    color: '#2ECC71',
  },
  {
    icon: '🏃',
    title: 'Kinésithérapie',
    duration: '5 ans',
    diploma: 'Licence en Kinésithérapie',
    description: 'Apprenez les techniques de rééducation fonctionnelle et motrice dans nos salles de pratique spécialisées avec équipements de pointe.',
    color: '#F4881B',
  },
  {
    icon: '💉',
    title: 'Soins Infirmiers',
    duration: '4 ans',
    diploma: 'Licence en Sciences Infirmières',
    description: 'Devenez un professionnel des soins avec une formation axée sur la pratique clinique, les urgences et l\'accompagnement des patients.',
    color: '#E74C3C',
  },
  {
    icon: '💊',
    title: 'Pharmacie',
    duration: '6 ans',
    diploma: 'Doctorat en Pharmacie',
    description: 'Formation en sciences pharmaceutiques, pharmacologie, toxicologie et gestion officinale avec accès à nos laboratoires modernes.',
    color: '#9B59B6',
  },
  {
    icon: '🔬',
    title: 'Sciences Biomédicales',
    duration: '5 ans',
    diploma: 'Master en Sciences Biomédicales',
    description: 'Explorez la biologie médicale, l\'analyse médicale et la recherche biomédicale dans nos laboratoires haute technologie.',
    color: '#3498DB',
  },
];

export default function Formations() {
  return (
    <section id="formations" className="section">
      <div className="container">
        <div className="section__header reveal">
          <span className="section__badge">Formations</span>
          <h2 className="section__title">Nos Filières d'Excellence</h2>
          <p className="section__subtitle">
            Des programmes rigoureux conçus pour former les leaders de la santé de demain, 
            avec un équilibre parfait entre enseignement théorique et pratique clinique.
          </p>
        </div>

        <div className="formations__grid">
          {FORMATIONS.map((formation, i) => (
            <div key={i} className={`formations__card reveal stagger-${i + 1}`}>
              <div className="formations__card-header" style={{ '--card-color': formation.color }}>
                <span className="formations__card-icon">{formation.icon}</span>
                <div className="formations__card-duration">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                  {formation.duration}
                </div>
              </div>
              <div className="formations__card-body">
                <h3 className="formations__card-title">{formation.title}</h3>
                <span className="formations__card-diploma">{formation.diploma}</span>
                <p className="formations__card-desc">{formation.description}</p>
                <button className="formations__card-btn" style={{ color: formation.color }}>
                  En savoir plus
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
