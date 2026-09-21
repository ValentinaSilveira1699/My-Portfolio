import { Link } from "react-router-dom"

import "../App.css"

import traceTrackHero from "../assets/AR Racing Game/camera.jpg"
import traceTrackGameplay from "../assets/AR Racing Game/menu.jpg"

import video1 from "../assets/AR Racing Game/First Demo.mp4"
import video2 from "../assets/AR Racing Game/Final Look.mov"
import video3 from "../assets/AR Racing Game/Robot.mov"

function ARRacing() {
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


      {/* HERO */}
      <section className="ar-racing-hero">

        <div className="ar-racing-hero-content">

          <p className="eyebrow">
            COMPUTER SCIENCE CAPSTONE
          </p>

          <h1>
            Trace Track
          </h1>

          <h2>
            Augmented Reality Racing Game
          </h2>

          <p className="project-intro">
            A robotics and augmented reality game where players control
            JetBot robots while computer vision tracks their movement
            and renders interactive virtual elements in real time.
          </p>

          <div className="project-detail-tags">
            <span>Python</span>
            <span>OpenCV</span>
            <span>ArUco</span>
            <span>PyOpenGL</span>
            <span>JetBot</span>
          </div>

        </div>


        <div className="ar-racing-hero-image">

          <img
            src={traceTrackHero}
            alt="Trace Track camera setup"
          />

        </div>

      </section>


      {/* PROJECT DETAILS */}
      <section className="project-media-section">

        <div className="section-heading">

          <p className="eyebrow">
            PROJECT
          </p>

          <h2>
            Robotics meets Augmented Reality
          </h2>

        </div>


        <div className="project-two-column">

          <div>

            <p>
              Trace Track was created as my Computer Science Capstone
              project at Georgia Southern University.
            </p>

            <p>
              The system uses an overhead camera and ArUco markers
              attached to JetBot robots to track their position and
              movement while the game renders virtual racing elements
              around them.
            </p>

          </div>


          <div className="project-info-card">

            <div>
              <span>Course</span>
              <strong>CSCI 5530</strong>
            </div>

            <div>
              <span>Instructor</span>
              <strong>Dr. Ryan Florin</strong>
            </div>

            <div>
              <span>Team</span>
              <strong>5-person team</strong>
            </div>

            <div>
              <span>Year</span>
              <strong>Fall 2024</strong>
            </div>

          </div>

        </div>

      </section>


      {/* HOW IT WORKS */}
      <section className="project-media-section">

        <div className="section-heading">

          <p className="eyebrow">
            HOW IT WORKS
          </p>

          <h2>
            Physical Robots, Virtual Gameplay
          </h2>

        </div>


        <div className="trace-track-flow">

          <div className="flow-card">

            <span>01</span>

            <h3>
              Robot
            </h3>

            <p>
              JetBot robots are controlled by the players.
            </p>

          </div>


          <div className="flow-arrow">
            →
          </div>


          <div className="flow-card">

            <span>02</span>

            <h3>
              Tracking
            </h3>

            <p>
              Python and OpenCV detect ArUco markers attached
              to each robot.
            </p>

          </div>


          <div className="flow-arrow">
            →
          </div>


          <div className="flow-card">

            <span>03</span>

            <h3>
              AR
            </h3>

            <p>
              Virtual traces and 3D objects are rendered over
              the physical environment.
            </p>

          </div>

        </div>


        <div className="trace-track-image">

          <img
            src={traceTrackGameplay}
            alt="Trace Track game interface"
          />

        </div>

      </section>


      {/* GAMEPLAY */}
      <section className="project-media-section">

        <div className="section-heading">

          <p className="eyebrow">
            GAMEPLAY
          </p>

          <h2>
            Trace Track in Action
          </h2>

        </div>


        <div className="trace-track-videos">

          <div className="video-card">

            <video
              controls
              preload="metadata"
            >
              <source
                src={video1}
                type="video/mp4"
              />
            </video>

            <div className="video-card-content">

              <span>01</span>

              <h3>
                First Demo
              </h3>

            </div>

          </div>


          <div className="video-card">

            <video
              controls
              preload="metadata"
            >
              <source
                src={video2}
                type="video/quicktime"
              />
            </video>

            <div className="video-card-content">

              <span>02</span>

              <h3>
                Final Presentation Testing
              </h3>

            </div>

          </div>


          <div className="video-card">

            <video
              controls
              preload="metadata"
            >
              <source
                src={video3}
                type="video/quicktime"
              />
            </video>

            <div className="video-card-content">

              <span>03</span>

              <h3>
                Robot Demo
              </h3>

            </div>

          </div>

        </div>

      </section>


      {/* MY CONTRIBUTION */}
      <section className="project-media-section">

        <div className="section-heading">

          <p className="eyebrow">
            MY CONTRIBUTION
          </p>

          <h2>
            What I worked on
          </h2>

        </div>


        <div className="contribution-grid">

          <div className="contribution-card">

            <span>01</span>

            <h3>
              UI & Game Interface
            </h3>

            <p>
              Designed and developed the game's user interface,
              including the menus, player selection, and overall
              gameplay interface.
            </p>

          </div>


          <div className="contribution-card">

            <span>02</span>

            <h3>
              ArUco Marker Tracking
            </h3>

            <p>
              Implemented ArUco marker detection using Python
              and OpenCV to identify and track the robots in
              real time.
            </p>

          </div>


          <div className="contribution-card">

            <span>03</span>

            <h3>
              Robot Identification
            </h3>

            <p>
              Assigned individual ArUco markers to each robot
              so the system could distinguish and track multiple
              robots independently.
            </p>

          </div>


          <div className="contribution-card">

            <span>04</span>

            <h3>
              AR Integration
            </h3>

            <p>
              Connected the physical ArUco markers with the
              virtual game environment, linking robot movement
              with the augmented reality experience.
            </p>

          </div>


          <div className="contribution-card">

            <span>05</span>

            <h3>
              Player Selection
            </h3>

            <p>
              Implemented the menu functionality for selecting
              the number of players before starting a race.
            </p>

          </div>


          <div className="contribution-card">

            <span>06</span>

            <h3>
              Agile Development
            </h3>

            <p>
              Collaborated with a five-person team using GitHub,
              Agile sprints, testing, and iterative development.
            </p>

          </div>

        </div>

      </section>


      {/* TECHNOLOGIES */}
      <section className="project-media-section">

        <div className="section-heading">

          <p className="eyebrow">
            TECHNOLOGIES
          </p>

          <h2>
            Built with
          </h2>

        </div>


        <div className="technology-grid">

          <span>Python</span>
          <span>OpenCV</span>
          <span>ArUco</span>
          <span>PyOpenGL</span>
          <span>PyQt5</span>
          <span>PyGame</span>
          <span>Jetson Nano</span>
          <span>JetBot</span>
          <span>Bluetooth</span>

        </div>

      </section>


      {/* GITHUB */}
      <section className="project-actions">

        <a
          href="https://github.com/GSU-CS-Software-Engineering/2024Fall-MarioKart"
          target="_blank"
          rel="noreferrer"
          className="primary-button"
        >
          View on GitHub ↗
        </a>

        <Link
          to="/#projects"
          className="secondary-button"
        >
          ← Back to Projects
        </Link>

      </section>


      {/* FOOTER */}
      <footer>

        <p>
          © 2026 Valentina Silveira · Software Developer
        </p>

      </footer>

    </div>
  )
}

export default ARRacing