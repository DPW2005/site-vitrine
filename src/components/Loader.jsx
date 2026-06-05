import { useState, useEffect } from 'react';

export default function Loader({ onLoadComplete }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const duration = 1500;
    const interval = 50;
    const step = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress(prev => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, interval);

    const completeTimer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        onLoadComplete();
      }, 800);
    }, duration);

    return () => {
      clearInterval(timer);
      clearTimeout(completeTimer);
    };
  }, [onLoadComplete]);

  return (
    <div className={`loader ${fadeOut ? 'loader--fade-out' : ''}`}>
      <div className="loader__content">
        {/* Animated medical cross logo */}
        <div className="loader__logo">
          <div className="loader__logo-ring"></div>
          <svg className="loader__logo-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 14L32 50" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            <path d="M14 32L50 32" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          </svg>
        </div>

        <h1 className="loader__title">I3SN</h1>
        <p className="loader__subtitle">Institut Supérieure des Sciences de la Santé de Ngong</p>

        {/* Progress bar */}
        <div className="loader__progress-wrapper">
          <div className="loader__progress-bar">
            <div
              className="loader__progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="loader__progress-text">{Math.round(progress)}%</span>
        </div>

        <p className="loader__loading-text">
          Chargement en cours
          <span className="loader__dot loader__dot--1">.</span>
          <span className="loader__dot loader__dot--2">.</span>
          <span className="loader__dot loader__dot--3">.</span>
        </p>
      </div>

      {/* Background decorative elements */}
      <div className="loader__deco loader__deco--1"></div>
      <div className="loader__deco loader__deco--2"></div>
      <div className="loader__deco loader__deco--3"></div>
    </div>
  );
}
