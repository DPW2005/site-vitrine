import { useState, useEffect } from 'react'
import Loader from './components/Loader'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Formations from './components/Formations'
import Campus from './components/Campus'
import Administration from './components/Administration'
import Personnel from './components/Personnel'
import VieEtudiante from './components/VieEtudiante'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Setup intersection observer for scroll reveal animations
    const setupReveal = () => {
      const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
      
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            // Optional: remove observer after revealing to only animate once
            // revealObserver.unobserve(entry.target)
          }
        })
      }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
      })

      reveals.forEach(reveal => {
        revealObserver.observe(reveal)
      })

      return () => revealObserver.disconnect()
    }

    if (!loading) {
      // Delay setting up the observer slightly to allow DOM to render after loading screen
      setTimeout(setupReveal, 100)
    }
  }, [loading])

  return (
    <>
      {loading && <Loader onLoadComplete={() => setLoading(false)} />}
      
      <div className={`app-wrapper ${loading ? 'app-wrapper--hidden' : ''}`}>
        <Header />
        
        <main>
          <Hero />
          <About />
          <Formations />
          <Campus />
          <Administration />
          <Personnel />
          <VieEtudiante />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  )
}

export default App
