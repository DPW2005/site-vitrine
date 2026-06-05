export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#accueil" className="footer__logo">
              <img className="footer__logo-icon" viewBox="0 0 64 64" fill="none" src="favicon.png" />
              <span className="footer__logo-name">I3S</span>
            </a>
            <p className="footer__desc">
              L'Institut Supérieure des Sciences de la Santé s'engage à former
              l'élite médicale et paramédicale avec rigueur, innovation et humanisme.
            </p>
            <div className="footer__socials">
              <a href="#" className="footer__social-link" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__title">Navigation</h4>
            <ul className="footer__links">
              <li><a href="#accueil" className="footer__link">Accueil</a></li>
              <li><a href="#about" className="footer__link">À Propos</a></li>
              <li><a href="#formations" className="footer__link">Formations</a></li>
              <li><a href="#campus" className="footer__link">Campus</a></li>
              <li><a href="#vie-etudiante" className="footer__link">Vie Étudiante</a></li>
            </ul>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__title">Formations</h4>
            <ul className="footer__links">
              <li><a href="#formations" className="footer__link">Médecine Générale</a></li>
              <li><a href="#formations" className="footer__link">Chirurgie Dentaire</a></li>
              <li><a href="#formations" className="footer__link">Kinésithérapie</a></li>
              <li><a href="#formations" className="footer__link">Soins Infirmiers</a></li>
              <li><a href="#formations" className="footer__link">Pharmacie</a></li>
            </ul>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__title">Légal</h4>
            <ul className="footer__links">
              <li><a href="#" className="footer__link">Mentions Légales</a></li>
              <li><a href="#" className="footer__link">Politique de Confidentialité</a></li>
              <li><a href="#" className="footer__link">Conditions Générales</a></li>
              <li><a href="#" className="footer__link">Règlement Intérieur</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} ESFS - École Supérieure de Formation en Santé. Tous droits réservés.
          </p>
          <div className="footer__credits">
            Conçu avec passion pour l'éducation en Afrique.
          </div>
        </div>
      </div>
    </footer>
  );
}
