import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Contact from './components/Contact'

function App() {
  return (
    <main style={{backgroundColor: '#0a0a0a', color: '#ffffff'}}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Achievements />
      <Contact />
    </main>
  )
}

export default App
