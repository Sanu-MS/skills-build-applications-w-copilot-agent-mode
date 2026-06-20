import { NavLink, Navigate, Route, Routes } from 'react-router-dom'

import Activities from './components/Activities'
import Leaderboard from './components/Leaderboard'
import Teams from './components/Teams'
import Users from './components/Users'
import Workouts from './components/Workouts'
import './App.css'

const navigationItems = [
  { path: '/users', label: 'Users' },
  { path: '/teams', label: 'Teams' },
  { path: '/activities', label: 'Activities' },
  { path: '/leaderboard', label: 'Leaderboard' },
  { path: '/workouts', label: 'Workouts' },
]

function Home() {
  return (
    <section className="octofit-view card border-0 shadow-sm">
      <div className="card-body p-4 p-lg-5">
        <div className="row g-4 align-items-center">
          <div className="col-12 col-lg-7">
            <p className="octofit-eyebrow mb-2">OctoFit Tracker</p>
            <h1 className="display-5 fw-bold text-white mb-3">
              A modern React 19 dashboard for the OctoFit multi-tier application.
            </h1>
            <p className="lead text-white-50 mb-4">
              Use the navigation to inspect users, teams, activities, leaderboard standings, and
              workouts directly from the API tier.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <NavLink className="btn btn-light btn-lg" to="/users">
                Open Users
              </NavLink>
              <NavLink className="btn btn-outline-light btn-lg" to="/activities">
                Open Activities
              </NavLink>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <div className="octofit-note p-4 p-lg-5 h-100">
              <div className="d-flex align-items-center gap-3 mb-3">
                <img
                  className="octofit-logo"
                  src="/octofitapp-small.png"
                  alt="OctoFit Tracker logo"
                  width="72"
                  height="72"
                />
                <div>
                  <p className="text-uppercase text-white-50 small mb-1">Environment note</p>
                  <h2 className="h4 text-white mb-0">Codespaces configuration</h2>
                </div>
              </div>
              <p className="text-white-50 mb-0">
                Define <code className="octofit-code">VITE_CODESPACE_NAME</code> in{' '}
                <code className="octofit-code">.env.local</code> so API URLs can resolve to the
                Codespaces host. When the variable is unset, the app safely falls back to the local
                API at <code className="octofit-code">http://127.0.0.1:8000</code>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="octofit-shell">
      <header className="octofit-header">
        <div className="container py-3 py-lg-4">
          <nav className="navbar navbar-dark octofit-nav rounded-4 px-3 px-lg-4 py-3 d-flex flex-wrap gap-3 align-items-center justify-content-between">
            <NavLink className="navbar-brand d-flex align-items-center gap-2 fw-semibold" to="/">
              <img
                src="/octofitapp-small.png"
                alt="OctoFit Tracker logo"
                width="32"
                height="32"
              />
              OctoFit Tracker
            </NavLink>
            <div className="d-flex flex-wrap gap-2 ms-auto">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.path}
                  className={({ isActive }) =>
                    `nav-link octofit-nav-link px-3 py-2 rounded-pill ${isActive ? 'active' : ''}`
                  }
                  to={item.path}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
      </header>

      <main className="container pb-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
