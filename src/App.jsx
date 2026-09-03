import './App.css'

function App() {
  return (
    <main className="wrap">
      <section className="card">
        <h1>Hi, I&apos;m thenai310</h1>
        <p>
          I build practical software solutions with a focus on clean user
          experience, reliable backend behavior, and maintainable code.
        </p>
        <p className="muted">
          This page acts as a quick resume-style snapshot of who I am, what I
          recently worked on, and where to reach me.
        </p>
      </section>

      <section className="card">
        <h2>Resume Summary</h2>
        <ul>
          <li>Software developer focused on web applications and automation.</li>
          <li>Hands-on experience with modern frontend and backend workflows.</li>
          <li>
            Interested in performance, clear architecture, and practical AI
            integrations.
          </li>
        </ul>
      </section>

      <section className="card">
        <h2>Recent Work</h2>
        <ul>
          <li>Built and refined personal and portfolio web experiences.</li>
          <li>Contributed to code quality and iterative product improvements.</li>
          <li>Worked on feature delivery with attention to usability.</li>
        </ul>
      </section>

      <section className="card">
        <h2>Connect</h2>
        <div className="links">
          <a
            href="https://github.com/thenai310"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:hello@example.com">Email</a>
        </div>
      </section>
    </main>
  )
}

export default App
