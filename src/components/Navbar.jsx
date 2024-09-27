import React from 'react'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-4 ">
        <div className="container-fluid ">
            <div className="containerLogo ">
          <a className="navbar-brand navbarText logoB" href="#"><i class="fi fi-br-square-b "></i></a>
            </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <a className="nav-link active navbarText" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link navbarText" href="#">About</a>
              </li>
              <li className="nav-item mx-2" >
                <a className="nav-link navbarText" href="#">Pages <i class="fi fi-rr-arrow-down"></i></a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link navbarText" href="#">Packages</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link navbarText" href="#">Contact</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link navbarText" href="#">Cart <span className="corchetesWheight">[</span> 0 <span className="corchetesWheight">]</span></a>
              </li>
            </ul>
            <div className="  ">

            <button className="navbarText containerBook p-2 ">
                <div className="d-flex justify-content-center p-1 ">

              <b>Free Consultation </b><i class="fi fi-rr-arrow-right mx-2 arrowMobile"></i>
                </div>
            </button>
            </div>
          </div>
        </div>
      </nav>
    )
}
