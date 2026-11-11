import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'

function App() {
  return (
    <div className="min-h-screen bg-page font-sans text-ink">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App