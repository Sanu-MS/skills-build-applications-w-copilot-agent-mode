import './App.css'

const metrics = [
  { label: 'Presentation tier', value: 'React 19 + Vite' },
  { label: 'Logic tier', value: 'Express + TypeScript' },
  { label: 'Data tier', value: 'MongoDB + Mongoose' },
]

const modules = [
  {
    title: 'Profiles and authentication',
    description: 'Foundation for user accounts, login flows, and team-aware permissions.',
  },
  {
    title: 'Activity logging',
    description: 'Capture workouts, sessions, and participation data for each athlete.',
  },
  {
    title: 'Leaderboard workflows',
    description: 'Surface team competition and weekly ranking data from the API layer.',
  },
]

function App() {
  return (
    <div className="octofit-shell">
      <div className="octofit-glow octofit-glow-left" />
      <div className="octofit-glow octofit-glow-right" />

      <main className="container py-4 py-lg-5 position-relative">
        <section className="hero-panel mb-4 mb-lg-5">
          <div className="hero-copy">
            <p className="eyebrow mb-3">OctoFit Tracker</p>
            <h1 className="display-4 fw-semibold text-white mb-3">
              A modern multi-tier fitness platform for teams, workouts, and competition.
            </h1>
            <p className="lead text-white-50 mb-4">
              React 19 powers the presentation tier, Express handles the API, and Mongoose keeps
              MongoDB models in sync for users, teams, activities, leaderboards, and workouts.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a className="btn btn-light btn-lg px-4" href="http://localhost:5173">
                Frontend on 5173
              </a>
              <a className="btn btn-outline-light btn-lg px-4" href="http://localhost:8000/api/health">
                API on 8000
              </a>
            </div>
          </div>

          <div className="hero-card">
            <img
              className="hero-logo"
              src="/octofitapp-small.png"
              alt="OctoFit Tracker logo"
              width="128"
              height="128"
            />
            <div className="hero-card-copy">
              <p className="text-uppercase text-white-50 small mb-2">Stack summary</p>
              <ul className="list-unstyled mb-0">
                {metrics.map((metric) => (
                  <li key={metric.label} className="stack-row">
                    <span className="stack-label">{metric.label}</span>
                    <span className="stack-value">{metric.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="row g-3 g-lg-4">
          {modules.map((module) => (
            <div className="col-12 col-lg-4" key={module.title}>
              <article className="feature-card h-100">
                <p className="feature-kicker mb-2">Tier focus</p>
                <h2 className="h4 text-white mb-3">{module.title}</h2>
                <p className="text-white-50 mb-0">{module.description}</p>
              </article>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}

export default App
