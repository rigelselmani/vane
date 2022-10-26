import "./navbar.css"

export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-md fixed-top display-flex justify-content-end" style={{background: "#f566cf"}}>
          <div className="container display-flex">
            <a className="navbar-brand fs-4 text-light" href="/">Vanessa</a>
            <button className="navbar-toggler display-flex justify-content-end text-white"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <div className="navbar-toggler-icon text-white"></div>
            </button>
            <div className="collapse navbar-collapse display-flex justify-content-end text-white" id="navbarNavAltMarkup">
              <ul className="navbar-nav fs-4 text-white">
                <a className="nav-link text-white" href="/">Home</a>
                <a className="nav-link text-white" href="/about">About Us</a>
                <a className="nav-link text-white" href="/services">Services</a>
                <a className="nav-link text-white" href="/gallery">Gallery</a>
                <a className="nav-link text-white" href="/contact">Contact</a>
              </ul>
            </div>
          </div>
        </nav>
    )
}