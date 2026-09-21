import './App.css'
import ScrollToTop from "./ScrollToTop"
import profilePhoto from './assets/valentina.jpeg'
import { useState } from "react"
import { translations } from "./translations"
import { Link } from "react-router-dom"

function App() {
  const [language, setLanguage] = useState<"en" | "es">("en")

  const t = translations[language]

  return (
    <div className="portfolio">

      <ScrollToTop />

      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo">
          VS<span>.</span>
        </a>

        <nav>
          <a href="#home">{t.nav.home}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#experience">{t.nav.experience}</a>
          <a href="#projects">{t.nav.projects}</a>
          <a href="#skills">{t.nav.skills}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>

        <div className="nav-actions">

          {/* LANGUAGE SWITCHER */}
          <div className="language-switcher">
            <button
              className={language === "en" ? "active" : ""}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>

            <span>|</span>

            <button
              className={language === "es" ? "active" : ""}
              onClick={() => setLanguage("es")}
            >
              ES
            </button>
          </div>

          {/* GITHUB */}
          <a
            href="https://github.com/ValentinaSilveira1699"
            target="_blank"
            rel="noreferrer"
            className="nav-button"
          >
            {t.nav.github}
          </a>

        </div>
      </header>


      <main>

        {/* =========================
            HERO
        ========================= */}
        <section id="home" className="hero-section">

          <div className="hero-content">

            <p className="eyebrow">
              {t.hero.eyebrow}
            </p>

            <h1>
              {t.hero.greeting} <span>{t.hero.name}</span>
              <br />
            </h1>

            <p className="hero-description">
              {t.hero.description}
            </p>

            <div className="hero-buttons">

              <a
                href="#projects"
                className="primary-button"
              >
                {t.hero.viewWork}
              </a>

              <a
                href="#contact"
                className="secondary-button"
              >
                {t.hero.contact}
              </a>

            </div>

          </div>


          {/* HERO PROFILE */}
          <div className="hero-profile">

            <div className="profile-glow"></div>

            <div className="profile-image-wrapper">
              <img
                src={profilePhoto}
                alt="Valentina Silveira"
                className="profile-image"
              />
            </div>

            <div className="profile-badge">

              <span className="status-dot"></span>

              <div>
                <strong>{t.hero.badgeRole}</strong>
                <small>{t.hero.badgeStatus}</small>
              </div>

            </div>

          </div>

        </section>


        {/* =========================
            ABOUT
        ========================= */}
        <section id="about" className="section">

          <div className="section-heading">

            <p className="eyebrow">
              {t.about.eyebrow}
            </p>

            <h2>
              {t.about.title}
            </h2>

          </div>


          <div className="about-grid">

            <div>

              <p>
                {t.about.paragraph1}
              </p>

              <p>
                {t.about.paragraph2}
              </p>

              <p>
                {t.about.paragraph3}
              </p>

            </div>


            <div className="about-facts">

              <div className="fact-card">
                <strong>🎓</strong>
                <span>
                  {t.about.facts.education}
                </span>
              </div>

              <div className="fact-card">
                <strong>💻</strong>
                <span>
                  {t.about.facts.development}
                </span>
              </div>

              <div className="fact-card">
                <strong>🌎</strong>
                <span>
                  {t.about.facts.location}
                </span>
              </div>

              <div className="fact-card">
                <strong>🚀</strong>
                <span>
                  {t.about.facts.learning}
                </span>
              </div>

            </div>

          </div>

        </section>


        {/* =========================
            EXPERIENCE
        ========================= */}
        <section id="experience" className="section">

          <div className="section-heading">

            <p className="eyebrow">
              {t.experience.eyebrow}
            </p>

            <h2>
              {t.experience.title}
            </h2>

          </div>


          <div className="experience-list">

            {/* SALT */}
            <article className="experience-card">

              <div className="experience-date">
                {t.experience.salt.date}
              </div>

              <div>

                <h3>
                  {t.experience.salt.position}
                </h3>

                <h4>
                  {t.experience.salt.company}
                </h4>

                <ul>
                  {t.experience.salt.bullets.map((bullet, index) => (
                    <li key={index}>
                      {bullet}
                    </li>
                  ))}
                </ul>

              </div>

            </article>


            {/* GEORGIA SOUTHERN UNIVERSITY */}
            <article className="experience-card">

              <div className="experience-date">
                {t.experience.georgiaSouthern.date}
              </div>

              <div>

                <h3>
                  {t.experience.georgiaSouthern.position}
                </h3>

                <h4>
                  {t.experience.georgiaSouthern.company}
                </h4>

                <ul>
                  {t.experience.georgiaSouthern.bullets.map((bullet, index) => (
                    <li key={index}>
                      {bullet}
                    </li>
                  ))}
                </ul>

              </div>

            </article>


            {/* CATHOLIC UNIVERSITY */}
            <article className="experience-card">

              <div className="experience-date">
                {t.experience.catholicUniversity.date}
              </div>

              <div>

                <h3>
                  {t.experience.catholicUniversity.position}
                </h3>

                <h4>
                  {t.experience.catholicUniversity.company}
                </h4>

                <ul>
                  {t.experience.catholicUniversity.bullets.map((bullet, index) => (
                    <li key={index}>
                      {bullet}
                    </li>
                  ))}
                </ul>

              </div>

            </article>


            {/* BBQ POCITOS */}
            <article className="experience-card">

              <div className="experience-date">
                {t.experience.bbq.date}
              </div>

              <div>

                <h3>
                  {t.experience.bbq.position}
                </h3>

                <h4>
                  {t.experience.bbq.company}
                </h4>

                <ul>
                  {t.experience.bbq.bullets.map((bullet, index) => (
                    <li key={index}>
                      {bullet}
                    </li>
                  ))}
                </ul>

              </div>

            </article>

          </div>

        </section>


        {/* =========================
            PROJECTS
        ========================= */}
        <section id="projects" className="section">

          <div className="section-heading">

            <p className="eyebrow">
              {t.projects.eyebrow}
            </p>

            <h2>
              {t.projects.title}
            </h2>

          </div>


          <div className="projects-grid">

            {/* VAL'S HAUL */}
            <Link
              to="/projects/vals-haul"
              className="project-card"
            >

              <div className="project-number">
                01
              </div>

              <h3>
                {t.projects.valsHaul.name}
              </h3>

              <p>
                {t.projects.valsHaul.description}
              </p>

              <div className="tags">
                <span>JavaScript</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>REST API</span>
              </div>

            </Link>


            {/* AR RACING */}
            <Link
              to="/projects/ar-racing"
              className="project-card project-card-link"
            >
              <div className="project-number">
                03
              </div>

              <h3>
                Trace Track
              </h3>

              <p>
                An augmented reality racing game combining JetBot robotics,
                computer vision, and real-time 3D rendering.
              </p>

              <div className="tags">
                <span>Python</span>
                <span>OpenCV</span>
                <span>ArUco</span>
                <span>PyOpenGL</span>
              </div>
            </Link>


            {/* ORGANIZEME */}
            <article className="project-card">

              <div className="project-number">
                03
              </div>

              <h3>
                {t.projects.organizeMe.name}
              </h3>

              <p>
                {t.projects.organizeMe.description}
              </p>

              <div className="tags">
                <span>UI/UX</span>
                <span>Design</span>
                <span>Planning</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>

            </article>


            {/* WAY TO HEAVEN */}
            <Link
              to="/projects/way-to-heaven"
              className="project-card project-card-link"
            >

              <div className="project-number">
                04
              </div>

              <h3>
                {t.projects.wayToHeaven.name}
              </h3>

              <p>
                {t.projects.wayToHeaven.description}
              </p>

              <div className="tags">
                <span>PuzzleScript</span>
                <span>HTML5</span>
                <span>Game Development</span>
                <span>2D</span>
              </div>

            </Link>

          </div>

        </section>


        {/* =========================
            SKILLS
        ========================= */}
        <section id="skills" className="section">

          <div className="section-heading">

            <p className="eyebrow">
              {t.skills.eyebrow}
            </p>

            <h2>
              {t.skills.title}
            </h2>

          </div>


          <div className="skills-grid">

            <div className="skill-group">
              <h3>{t.skills.languages}</h3>
              <p>
                Java · JavaScript · Python · C# · C/C++ · SQL · VB.NET
              </p>
            </div>


            <div className="skill-group">
              <h3>{t.skills.webBackend}</h3>
              <p>
                HTML5 · CSS · Bootstrap · Node.js · Express.js · REST APIs
              </p>
            </div>


            <div className="skill-group">
              <h3>{t.skills.frameworks}</h3>
              <p>
                .NET Core · .NET Framework · WordPress · Unity
              </p>
            </div>


            <div className="skill-group">
              <h3>{t.skills.databases}</h3>
              <p>
                MySQL · Microsoft SQL Server · GitHub · SQL Queries · VS Code · Visual Studio
              </p>
            </div>


            <div className="skill-group">
              <h3>{t.skills.data}</h3>
              <p>
                Power BI · Power Apps · Intune · Active Directory
              </p>
            </div>


            <div className="skill-group">
              <h3>{t.skills.design}</h3>
              <p>
                Figma · Photoshop · Canva
              </p>
            </div>

          </div>

        </section>


        {/* =========================
            CONTACT
        ========================= */}
        <section id="contact" className="contact-section">

          <p className="eyebrow">
            {t.contact.eyebrow}
          </p>

          <h2>
            {t.contact.title}
          </h2>

          <p>
            {t.contact.description}
          </p>


          <div className="contact-links">

            {/* EMAIL */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=valentinasilveira1699@gmail.com&su=Hello%20Valentina"
              target="_blank"
              rel="noopener noreferrer"
              className="email-button"
            >
              {t.contact.email}
            </a>


            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/valentina-silveira-7957a61b6/"
              target="_blank"
              rel="noreferrer"
            >
              {t.contact.linkedin}
            </a>


            {/* GITHUB */}
            <a
              href="https://github.com/ValentinaSilveira1699"
              target="_blank"
              rel="noreferrer"
            >
              {t.contact.github}
            </a>

          </div>

        </section>

      </main>


      {/* FOOTER */}
      <footer>
        <p>
          {t.footer}
        </p>
      </footer>

    </div>
  )
}

export default App