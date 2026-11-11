import { Splash } from './components/Splash'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Process } from './components/Process'
import { Projects } from './components/Projects'
import { About } from './components/About'
import { Contact } from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-page font-sans text-ink">
      <Splash />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Process />
        <About />
        <Contact />
      </main>
    </div>
  )
}

export default App