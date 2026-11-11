function App() {
  return (
    <main className="min-h-screen bg-page text-ink font-sans p-10 space-y-6">
      <p className="font-mono text-highlight">// theme test</p>
      <h1 className="font-heading text-5xl font-bold">Kei-Tech</h1>
      <p className="text-muted">This text uses the muted color.</p>
      <a href="#" className="inline-block bg-accent text-on-accent font-semibold px-6 py-3 rounded-lg">
        Get a Free Quote
      </a>
      <div className="bg-band text-band-ink p-6 rounded-xl">
        <p className="text-band-muted">This is a band section.</p>
      </div>
    </main>
  )
}

export default App