import { Link } from "react-router-dom"
import "../App.css"

import valsHaulHome from "../assets/ValsHaul/home.png"
import valsHaulProducts from "../assets/ValsHaul/products.png"
import valsHaulCart from "../assets/ValsHaul/cart.png"

function ProjectPage() {

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
        <section className="project-detail-hero">

          <div className="project-detail-heading">

            <p className="eyebrow">
              FULL-STACK WEB PROJECT
            </p>

            <h1>
              Val's Haul
            </h1>

            <p className="project-detail-subtitle">
              E-Commerce & Product Catalog
            </p>

            <p className="project-detail-intro">
              A full-stack e-commerce website built to create an
              interactive and user-friendly online shopping experience.
            </p>

            <div className="project-detail-tags">
              <span>JavaScript</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>REST API</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>

          </div>


          {/* HERO IMAGE */}
          <div className="project-hero-image">
            <img
                src={valsHaulHome}
                alt="Val's Haul e-commerce homepage"
            />
            </div>

        </section>


        {/* PROJECT INFO */}
        <section className="project-info-grid">

          <div className="project-info-card">

            <p className="eyebrow">
              ABOUT THE PROJECT
            </p>

            <h2>
              Building a complete web experience
            </h2>

            <p>
              Val's Haul is a full-stack e-commerce project developed
              to explore the process of building a web application
              from the frontend interface to the backend services.
            </p>

            <p>
              The project includes a product catalog, dynamic content,
              server-side functionality, and REST API integration.
            </p>

          </div>


          <div className="project-info-card">

            <p className="eyebrow">
              MY ROLE
            </p>

            <h2>
              Full-Stack Development
            </h2>

            <p>
              I worked across both the frontend and backend of the
              application, implementing the interface, application
              logic, and communication between the client and server.
            </p>

            <ul className="project-list">

              <li>
                Frontend development
              </li>

              <li>
                Backend development
              </li>

              <li>
                REST API integration
              </li>

              <li>
                Product catalog functionality
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
              <strong>JavaScript</strong>
              <span>Frontend logic</span>
            </div>

            <div className="technology-card">
              <strong>Node.js</strong>
              <span>Backend runtime</span>
            </div>

            <div className="technology-card">
              <strong>Express</strong>
              <span>Server framework</span>
            </div>

            <div className="technology-card">
              <strong>REST API</strong>
              <span>Data communication</span>
            </div>

            <div className="technology-card">
              <strong>HTML</strong>
              <span>Structure</span>
            </div>

            <div className="technology-card">
              <strong>CSS</strong>
              <span>Visual design</span>
            </div>

          </div>

        </section>


        {/* SCREENSHOTS */}
        <div className="screenshots-grid">

            <div className="screenshot-card">
                <img
                src={valsHaulHome}
                alt="Val's Haul homepage"
                />
                <p>Homepage & Product Experience</p>
            </div>

            <div className="screenshot-card">
                <img
                src={valsHaulProducts}
                alt="Val's Haul product catalog"
                />
                <p>Product Catalog</p>
            </div>

            <div className="screenshot-card">
                <img
                src={valsHaulCart}
                alt="Val's Haul shopping cart"
                />
                <p>Shopping Cart</p>
            </div>

        </div>


        {/* LEARNED */}
        <section className="project-learned">

          <div>

            <p className="eyebrow">
              LEARNING & DEVELOPMENT
            </p>

            <h2>
              What I learned
            </h2>

          </div>

          <p>
            This project strengthened my understanding of full-stack
            web development and helped me gain practical experience
            working with frontend interfaces, backend services,
            REST APIs, and the connection between different layers
            of a web application.
          </p>

        </section>


        {/* LINKS */}
        <section className="project-actions">

          <a
            href="https://github.com/ValentinaSilveira1699/DistributedWebSystemDesign/tree/main/A5-Silveira-Valentina"
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

      </main>


      <footer>
        <p>
          © 2026 Valentina Silveira · Software Developer
        </p>
      </footer>

    </div>
  )
}

export default ProjectPage