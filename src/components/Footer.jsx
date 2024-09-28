import React from 'react'

export const Footer = () => {
    return (
        <footer className="row bg-dark p-5 text-light">
            <div className="col-sm-12 col-md-6 mt-2">
                <p className="small text-center">Creado por Sebastián Ariel Mosquera</p>
                <p className="small text-center">sebimosquera@gmail.com</p>
                <p className="small text-center">+54 11 68610556</p>
                <div className="d-flex justify-content-center flex-wrap  gap-3">
                          <button className="btn btn-primary ">
                        <a href="https://www.linkedin.com/in/sebastianmosquera/" className="text-decoration-none" target="_blank">
                    <i class="fi fi-brands-linkedin text-light "></i>
                    </a>
                    </button>
                  
                   
                        <button className="btn btn-primary ">
                        <a href="https://github.com/z4myk" className="text-decoration-none" target="_blank">
                    <i class="fi fi-brands-github text-light"></i>
                    </a>
                    </button>
                    
                </div>
            </div>

            <div className="col-sm-12 col-md-6 mt-2">
                <p className="small  ">El proyecto fue creado en React js con vite, se utilizo Bootstrap y CSS, se añadio animaciones fade de la libreria AOS, un loader principal usando useEFfect y  setTimeout de javascript. <br /> desde ya, muchas gracias por la oportunidad! </p>
            </div>
        </footer>
    )
}
