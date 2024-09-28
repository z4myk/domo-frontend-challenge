import React from 'react'
import loader from '../assets/loader.jpg'
import domo from '../assets/domo.png'
export const Loader = () => {
    return (
        <>
       
        <section className="loader-container">
        <div className="">
      
        <img src={loader} alt="Loader" className="loaderBackground" />
        <div className="loader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        </div>
       
      </section>

      </>
    )
}
