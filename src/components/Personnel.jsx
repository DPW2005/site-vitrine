const STAFF = [
  {
    name: 'Dr. Amina Diallo',
    title: 'Chef de Département',
    specialty: 'Médecine Interne',
    emoji: '👩‍⚕️',
    color: '#0A6E8A',
  },
  {
    name: 'Pr. Kofi Asante',
    title: 'Professeur Titulaire',
    specialty: 'Chirurgie Générale',
    emoji: '👨‍⚕️',
    color: '#2ECC71',
  },
  {
    name: 'Dr. Fatou Ndiaye',
    title: 'Maître de Conférences',
    specialty: 'Pédiatrie',
    emoji: '👩‍⚕️',
    color: '#F4881B',
  },
  {
    name: 'Dr. Ousmane Traoré',
    title: 'Professeur Associé',
    specialty: 'Cardiologie',
    emoji: '👨‍⚕️',
    color: '#E74C3C',
  },
  {
    name: 'Dr. Aïcha Bamba',
    title: 'Chef de Clinique',
    specialty: 'Gynécologie-Obstétrique',
    emoji: '👩‍⚕️',
    color: '#9B59B6',
  },
  {
    name: 'Pr. Moussa Keïta',
    title: 'Directeur de Recherche',
    specialty: 'Pharmacologie',
    emoji: '👨‍⚕️',
    color: '#3498DB',
  },
  {
    name: 'Dr. Grace Okafor',
    title: 'Maître Assistante',
    specialty: 'Dentisterie',
    emoji: '👩‍⚕️',
    color: '#1ABC9C',
  },
  {
    name: 'Dr. Ibrahim Sow',
    title: 'Professeur Associé',
    specialty: 'Kinésithérapie',
    emoji: '👨‍⚕️',
    color: '#E67E22',
  },
];

export default function Personnel() {
  return (
    <section id="personnel" className="section section--dark">
      <div className="container">
        <div className="section__header reveal">
          <span className="section__badge">Équipe Pédagogique</span>
          <h2 className="section__title">Des Experts Passionnés</h2>
          <p className="section__subtitle">
            Notre corps enseignant est composé de professionnels reconnus, praticiens 
            hospitaliers et chercheurs dédiés à la transmission de leur expertise.
          </p>
        </div>

        <div className="personnel__grid">
          {STAFF.map((person, i) => (
            <div key={i} className={`personnel__card reveal stagger-${i + 1}`}>
              <div className="personnel__card-avatar" style={{ '--accent': person.color }}>
                <span className="personnel__card-emoji">{person.emoji}</span>
                <div className="personnel__card-ring"></div>
              </div>
              <h3 className="personnel__card-name">{person.name}</h3>
              <span className="personnel__card-title">{person.title}</span>
              <span className="personnel__card-specialty" style={{ color: person.color }}>
                {person.specialty}
              </span>
              <div className="personnel__card-socials">
                <a href="#" className="personnel__social" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="personnel__social" aria-label="Email">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M22 4l-10 8L2 4"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
