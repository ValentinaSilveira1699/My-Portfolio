import { Link } from "react-router-dom"
import "../App.css"

import wayToHeavenLeft from "../assets/WayToHeaven/gameplay-left.png"
import wayToHeavenRight from "../assets/WayToHeaven/gameplay-right.png"
function WayToHeaven() {
  return (
    <div className="project-page">

      {/* TOP BAR */}
      <header className="project-nav">

        <Link
          to="/#projects"
          className="project-back"
        >
          ← Back to Projects
        </Link>

        <span className="project-nav-logo">
          VS<span>.</span>
        </span>

      </header>


      <main>

        {/* HERO */}
        <section className="way-to-heaven-hero">

        <div className="way-to-heaven-side-image">
            <img
            src={wayToHeavenLeft}
            alt="Way to Heaven gameplay"
            />
        </div>


        <div className="way-to-heaven-center">

            <p className="eyebrow">
            GAME DEVELOPMENT PROJECT
            </p>

            <h1>
            Way to Heaven
            </h1>

            <p className="way-to-heaven-subtitle">
            An Immersive Puzzle Game
            </p>

            <p className="way-to-heaven-description">
            An immersive and challenging video game that takes players
            on a captivating journey from the depths of hell toward heaven.
            Players take the role of a soul who must overcome challenges
            and earn their wings to ascend to heaven.
            </p>

            <div className="project-detail-tags">
            <span>PuzzleScript</span>
            <span>HTML5</span>
            <span>Game Development</span>
            <span>2D</span>
            </div>

        </div>


        <div className="way-to-heaven-side-image">
            <img
            src={wayToHeavenRight}
            alt="Way to Heaven gameplay"
            />
        </div>

        </section>


        {/* ABOUT */}
        <section className="project-info-grid">

          <div className="project-info-card">

            <p className="eyebrow">
              ABOUT THE PROJECT
            </p>

            <h2>
              From Hell to Heaven
            </h2>

            <p>
              Way to Heaven is an original puzzle game created in
              PuzzleScript using HTML5.
            </p>

            <p>
              Players take the role of a soul who unexpectedly awakens
              in the depths of hell. Surrounded by darkness and despair,
              the player must navigate the world and overcome its
              challenges in pursuit of an extraordinary opportunity:
              earning their wings and ascending to heaven.
            </p>

          </div>


          <div className="project-info-card">

            <p className="eyebrow">
              MY ROLE
            </p>

            <h2>
              Game Design & Development
            </h2>

            <ul className="project-list">

              <li>
                Original game concept
              </li>

              <li>
                Puzzle and level design
              </li>

              <li>
                Game mechanics
              </li>

              <li>
                PuzzleScript development
              </li>

              <li>
                HTML5 implementation
              </li>

            </ul>

          </div>

        </section>


        {/* TECHNOLOGIES */}
        <section className="project-technologies">

          <div className="section-heading">

            <p className="eyebrow">
              TECHNOLOGIES
            </p>

            <h2>
              Built with
            </h2>

          </div>


          <div className="technology-grid">

            <div className="technology-card">
              <strong>PuzzleScript</strong>
              <span>Game development</span>
            </div>

            <div className="technology-card">
              <strong>HTML5</strong>
              <span>Web implementation</span>
            </div>

          </div>

        </section>


        {/* TRAILER */}
        <section className="project-media-section">

          <div className="section-heading">

            <p className="eyebrow">
              GAME TRAILER
            </p>

            <h2>
              Watch the trailer
            </h2>

          </div>

          <div className="project-video-wrapper">

            <iframe
              src="https://www.youtube.com/embed/BOiqBnF1fcU"
              title="Way to Heaven game trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />

          </div>

        </section>


        {/* PLAY GAME */}
        <section className="project-actions">

          <a
            href="https://vsroman.itch.io/way-to-heaven"
            target="_blank"
            rel="noreferrer"
            className="primary-button"
          >
            Play Way to Heaven ↗
          </a>

          <Link
            to="/#projects"
            className="secondary-button"
          >
            ← Back to Projects
          </Link>

        </section>

      </main>


      <footer>
        <p>
          © 2026 Valentina Silveira · Software Developer
        </p>
      </footer>

    </div>
  )
}

export default WayToHeaven