const FACILITIES = [
  {
    title: "Salle d'Opération",
    description: 'Bloc opératoire simulé avec équipements chirurgicaux de dernière génération',
    icon: '🏥',
    gradient: 'linear-gradient(135deg, #0A6E8A, #0E8FAF)',
  },
  {
    title: "Salle d'Urgences",
    description: 'Simulation réaliste d\'un service d\'urgences pour la formation aux gestes critiques',
    icon: '🚑',
    gradient: 'linear-gradient(135deg, #E74C3C, #C0392B)',
  },
  {
    title: 'Cabinet Dentaire',
    description: 'Fauteuils dentaires modernes et équipements radiologiques pour la pratique',
    icon: '🦷',
    gradient: 'linear-gradient(135deg, #2ECC71, #27AE60)',
  },
  {
    title: 'Salle de Kinésithérapie',
    description: 'Équipements de rééducation, tables de massage et matériel de physiothérapie',
    icon: '🏃',
    gradient: 'linear-gradient(135deg, #F4881B, #E67E22)',
  },
  {
    title: 'Laboratoires',
    description: 'Laboratoires de biologie, chimie et analyse médicale équipés pour la recherche',
    icon: '🔬',
    gradient: 'linear-gradient(135deg, #9B59B6, #8E44AD)',
  },
  {
    title: 'Salle Informatique',
    description: 'Centre multimédia avec ordinateurs, logiciels médicaux et accès internet haut débit',
    icon: '💻',
    gradient: 'linear-gradient(135deg, #3498DB, #2980B9)',
  },
  {
    title: 'Amphithéâtres',
    description: 'Salles de cours magistraux équipées de vidéoprojecteurs et systèmes audio modernes',
    icon: '🎓',
    gradient: 'linear-gradient(135deg, #1ABC9C, #16A085)',
  },
  {
    title: 'Bibliothèque',
    description: 'Fonds documentaire riche avec accès aux bases de données médicales internationales',
    icon: '📚',
    gradient: 'linear-gradient(135deg, #E67E22, #D35400)',
  },
];

export default function Campus() {
  return (
    <section id="campus" className="section section--light">
      <div className="container">
        <div className="section__header reveal">
          <span className="section__badge">Campus & Infrastructures</span>
          <h2 className="section__title">Des Installations de Classe Mondiale</h2>
          <p className="section__subtitle">
            Notre campus offre un environnement d'apprentissage exceptionnel avec des 
            équipements de pointe pour une formation pratique optimale.
          </p>
        </div>

        <div className="campus__grid">
          {FACILITIES.map((facility, i) => (
            <div 
              key={i} 
              className={`campus__card reveal stagger-${i + 1}`}
            >
              <div className="campus__card-icon-wrapper" style={{ background: facility.gradient }}>
                <span className="campus__card-icon">{facility.icon}</span>
              </div>
              <div className="campus__card-content">
                <h3 className="campus__card-title">{facility.title}</h3>
                <p className="campus__card-desc">{facility.description}</p>
              </div>
              <div className="campus__card-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
