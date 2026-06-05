import { useEffect, useRef, useState } from 'react';

function AnimatedCounter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const STATS = [
  { icon: '🎓', value: 1500, suffix: '+', label: 'Étudiants Diplômés' },
  { icon: '📚', value: 10, suffix: '', label: 'Filières de Formation' },
  { icon: '🏆', value: 98, suffix: '%', label: 'Taux de Réussite' },
  { icon: '🌍', value: 3, suffix: '+', label: "Années d'Excellence" },
];

export default function About() {
  return (
    <section id="about" className="section section--light">
      <div className="container">
        <div className="section__header reveal">
          <span className="section__badge">À Propos</span>
          <h2 className="section__title">Une Institution d'Excellence au Service de la Santé</h2>
          <p className="section__subtitle">
            Depuis plus de 3 ans, l'I3SN forme les professionnels de santé de demain
            avec rigueur, passion et innovation. Notre mission : préparer des praticiens
            compétents, humains et engagés pour le continent africain et le monde.
          </p>
        </div>

        <div className="about__grid">
          {/* Mission card */}
          <div className="about__card reveal-left">
            <div className="about__card-icon">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2.5" opacity="0.2" />
                <path d="M24 10v28M10 24h28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="about__card-title">Notre Mission</h3>
            <p className="about__card-text">
              Former des professionnels de santé hautement qualifiés, capables de répondre
              aux défis sanitaires du continent africain grâce à un enseignement alliant
              théorie avancée et pratique clinique intensive.
            </p>
          </div>

          {/* Vision card */}
          <div className="about__card reveal-right">
            <div className="about__card-icon">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 6C14 6 6 16 6 24c0 8 8 18 18 18s18-10 18-18C42 16 34 6 24 6z" stroke="currentColor" strokeWidth="2.5" opacity="0.2" />
                <circle cx="24" cy="22" r="6" stroke="currentColor" strokeWidth="2.5" />
                <path d="M24 28v8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M20 36h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="about__card-title">Notre Vision</h3>
            <p className="about__card-text">
              Devenir la référence panafricaine en matière de formation médicale et
              paramédicale, en développant des partenariats internationaux et en intégrant
              les dernières avancées technologiques dans nos programmes.
            </p>
          </div>
        </div>

        {/* Animated counters */}
        <div className="about__stats reveal">
          {STATS.map((stat, i) => (
            <div key={i} className={`about__stat-card stagger-${i + 1}`}>
              <span className="about__stat-emoji">{stat.icon}</span>
              <span className="about__stat-number">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </span>
              <span className="about__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
