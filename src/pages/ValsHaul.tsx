import homeImage from '../assets/ValsHaul/home.png'
import productsImage from '../assets/ValsHaul/products.png'
import cartImage from '../assets/ValsHaul/cart.png'

function ValsHaul() {
  return (
    <div className="project-page">
      <h1>Val's Haul</h1>

      <p>
        A full-stack e-commerce web application built with
        JavaScript, Node.js, and Express.js.
      </p>

      <div className="project-gallery">
        <img src={homeImage} alt="Val's Haul homepage" />
        <img src={productsImage} alt="Val's Haul products page" />
        <img src={cartImage} alt="Val's Haul shopping cart" />
      </div>
    </div>
  )
}

export default ValsHaul