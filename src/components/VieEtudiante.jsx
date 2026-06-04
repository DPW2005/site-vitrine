import { useState } from 'react';

const STUDENT_LIFE = [
  {
    id: 'resto',
    title: 'Restaurant Universitaire',
    desc: 'Des repas équilibrés préparés quotidiennement par nos chefs, adaptés à tous les régimes alimentaires.',
    icon: '🍽️',
    color: '#0A6E8A',
  },
  {
    id: 'sport',
    title: 'Complexe Sportif',
    desc: 'Salle de sport, terrains de basket et football pour maintenir un esprit sain dans un corps sain.',
    icon: '🏀',
    color: '#F4881B',
  },
  {
    id: 'clubs',
    title: 'Clubs & Associations',
    desc: 'Plus de 20 associations étudiantes (culture, humanitaire, recherche) pour vous épanouir.',
    icon: '🤝',
    color: '#2ECC71',
  },
  {
    id: 'logement',
    title: 'Résidence Étudiante',
    desc: 'Des logements confortables sur le campus, sécurisés 24/7 avec espaces de coworking.',
    icon: '🏢',
    color: '#9B59B6',
  },
];

const TESTIMONIALS = [
  {
    text: "L'ESFS m'a offert un cadre d'étude exceptionnel. Les équipements pratiques m'ont permis d'être opérationnelle dès mon premier stage à l'hôpital.",
    name: "Mariam K.",
    role: "Étudiante en 4ème année de Médecine",
    rating: 5,
  },
  {
    text: "La vie associative sur le campus est incroyable. J'ai pu créer un club de prévention santé qui intervient dans les écoles primaires de la région.",
    name: "David T.",
    role: "Étudiant en Soins Infirmiers",
    rating: 5,
  },
  {
    text: "Les professeurs sont toujours à l'écoute et très accessibles. C'est rassurant d'être formé par des professionnels aussi bienveillants.",
    name: "Awa S.",
    role: "Étudiante en Kinésithérapie",
    rating: 5,
  }
];

export default function VieEtudiante() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="vie-etudiante" className="section section--light">
      <div className="container">
        <div className="section__header reveal">
          <span className="section__badge">Vie Étudiante</span>
          <h2 className="section__title">Un Campus Vibrant et Épanouissant</h2>
          <p className="section__subtitle">
            Parce que les études de santé sont exigeantes, nous avons créé un environnement 
            où chaque étudiant peut trouver l'équilibre parfait entre travail et détente.
          </p>
        </div>

        <div className="student-life__layout">
          {/* Facilities List */}
          <div className="student-life__facilities reveal-left">
            {STUDENT_LIFE.map((item, index) => (
              <div 
                key={item.id}
                className="student-life__facility-card"
                style={{ '--hover-color': item.color }}
              >
                <div className="student-life__facility-icon" style={{ backgroundColor: item.color + '15', color: item.color }}>
                  {item.icon}
                </div>
                <div className="student-life__facility-info">
                  <h3 className="student-life__facility-title">{item.title}</h3>
                  <p className="student-life__facility-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="student-life__testimonials reveal-right">
            <h3 className="student-life__testimonials-title">Paroles d'Étudiants</h3>
            
            <div className="student-life__testimonial-slider">
              <div className="student-life__testimonial-card">
                <div className="student-life__stars">
                  {[...Array(TESTIMONIALS[activeTab].rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <p className="student-life__testimonial-text">
                  "{TESTIMONIALS[activeTab].text}"
                </p>
                <div className="student-life__testimonial-author">
                  <div className="student-life__testimonial-avatar">
                    {TESTIMONIALS[activeTab].name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="student-life__testimonial-name">{TESTIMONIALS[activeTab].name}</h4>
                    <p className="student-life__testimonial-role">{TESTIMONIALS[activeTab].role}</p>
                  </div>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="student-life__slider-controls">
                {TESTIMONIALS.map((_, idx) => (
                  <button 
                    key={idx}
                    className={`student-life__slider-dot ${activeTab === idx ? 'active' : ''}`}
                    onClick={() => setActiveTab(idx)}
                    aria-label={`Voir le témoignage ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
