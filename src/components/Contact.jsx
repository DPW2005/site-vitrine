export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section__header reveal">
          <span className="section__badge">Contact & Admission</span>
          <h2 className="section__title">Prêt à Rejoindre l'I3SN ?</h2>
          <p className="section__subtitle">
            Notre équipe d'admission est à votre disposition pour répondre à toutes
            vos questions concernant les inscriptions et la vie sur le campus.
          </p>
        </div>

        <div className="contact__layout">
          {/* Contact Info */}
          <div className="contact__info reveal-left">
            <h3 className="contact__info-title">Nos Coordonnées</h3>
            <p className="contact__info-desc">
              Venez nous rendre visite sur l'un de nos campus ou contactez-nous par téléphone ou email.
            </p>

            <div className="contact__info-items">
              <div className="contact__info-item">
                <div className="contact__info-icon">📍</div>
                <div>
                  <h4 className="contact__info-label">Campus Principal</h4>
                  <p className="contact__info-value">Avenue de l'Excellence, Quartier Universitaire<br />12345 Ville, Pays</p>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">📞</div>
                <div>
                  <h4 className="contact__info-label">Téléphone</h4>
                  <p className="contact__info-value">+225 01 23 45 67 89</p>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">✉️</div>
                <div>
                  <h4 className="contact__info-label">Email</h4>
                  <p className="contact__info-value">admissions@i3sn.edu</p>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">🕒</div>
                <div>
                  <h4 className="contact__info-label">Horaires d'Ouverture</h4>
                  <p className="contact__info-value">Lun - Ven : 08h00 - 18h00<br />Samedi : 09h00 - 13h00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact__form-wrapper reveal-right">
            <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
              <h3 className="contact__form-title">Envoyez-nous un Message</h3>

              <div className="contact__form-group">
                <label htmlFor="name" className="contact__form-label">Nom Complet</label>
                <input type="text" id="name" className="contact__form-input" placeholder="Votre nom" required />
              </div>

              <div className="contact__form-group">
                <label htmlFor="email" className="contact__form-label">Email</label>
                <input type="email" id="email" className="contact__form-input" placeholder="votre.email@exemple.com" required />
              </div>

              <div className="contact__form-group">
                <label htmlFor="subject" className="contact__form-label">Objet</label>
                <select id="subject" className="contact__form-select" required>
                  <option value="">Sélectionnez un objet...</option>
                  <option value="admission">Demande d'Admission</option>
                  <option value="info">Informations sur les Formations</option>
                  <option value="visit">Visite du Campus</option>
                  <option value="other">Autre</option>
                </select>
              </div>

              <div className="contact__form-group">
                <label htmlFor="message" className="contact__form-label">Message</label>
                <textarea id="message" className="contact__form-textarea" rows="4" placeholder="Comment pouvons-nous vous aider ?" required></textarea>
              </div>

              <button type="submit" className="btn btn--primary contact__form-btn">
                Envoyer le message
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
