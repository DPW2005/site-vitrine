import { useState, useEffect, useCallback } from 'react';

const NAV_ITEMS = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'about', label: 'À Propos' },
  { id: 'formations', label: 'Formations' },
  { id: 'campus', label: 'Campus' },
  { id: 'administration', label: 'Administration' },
  { id: 'personnel', label: 'Personnel' },
  { id: 'vie-etudiante', label: 'Vie Étudiante' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Observe sections for active state
    const observerOptions = {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe each section
    NAV_ITEMS.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = useCallback((e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        {/* Logo */}
        <a href="#accueil" className="header__logo" onClick={(e) => handleNavClick(e, 'accueil')}>
          <img className="header__logo-icon" viewBox="0 0 64 64" fill="none" src='favicon.png' />
          <div className="header__logo-text">
            <span className="header__logo-name">I3SN</span>
            <span className="header__logo-tagline">Formation en Santé</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="header__nav">
          {NAV_ITEMS.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`header__nav-link ${activeSection === item.id ? 'header__nav-link--active' : ''}`}
              onClick={(e) => handleNavClick(e, item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#contact"
          className="btn btn--accent btn--sm header__cta"
          onClick={(e) => handleNavClick(e, 'contact')}
        >
          Candidater
        </a>

        {/* Hamburger */}
        <button
          className={`header__burger ${menuOpen ? 'header__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Ouvrir le menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`header__mobile-menu ${menuOpen ? 'header__mobile-menu--open' : ''}`}>
        <nav className="header__mobile-nav">
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`header__mobile-link ${activeSection === item.id ? 'header__mobile-link--active' : ''}`}
              onClick={(e) => handleNavClick(e, item.id)}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn--accent header__mobile-cta"
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            Candidater maintenant
          </a>
        </nav>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="header__overlay" onClick={() => setMenuOpen(false)}></div>
      )}
    </header>
  );
}
