import "./navbar.css"

export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-md bg-info display-flex justify-content-end ">
          <div className="container display-flex">
            <a className="navbar-brand fs-4" href="/">Home</a>
            <button className="navbar-toggler display-flex justify-content-end "  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <div className="navbar-toggler-icon "></div>
            </button>
            <div className="collapse navbar-collapse display-flex justify-content-end" id="navbarNavAltMarkup">
              <ul className="navbar-nav fs-4">
              <a className="nav-link" href="/">Home</a>
                <a className="nav-link" href="/about">About Us</a>
                <a className="nav-link" href="/services">Services</a>
                <a className="nav-link" href="/gallery">Gallery</a>
                <a className="nav-link" href="/contact">Contact</a>
              </ul>
            </div>
          </div>
        </nav>
    )
}