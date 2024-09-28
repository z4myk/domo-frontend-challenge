import React from 'react';

export const HomePage = () => {
    return (
        <header className="row" data-aos="fade-up"
        data-aos-duration="3000">
         
            <div className="col-12 col-md-6 backgroundCol " >
                <section className="container mt-3 p-5">
                    <div className="pb-5">
                        <div className="mb-4 pt-5">
                            <span className="containerWelcome p-2  text-light">Welcome to Businezz X</span>
                        </div>
                        <h1 className="text-light">
                            Join us in growing <br /> your <span className="borderBusiness">business</span>.
                        </h1>
                    </div>

                    <div className="mt-5 pt-5 text-light">
                        <hr className="w-100" />
                        <div>
                            <h4>
                                Elevate your business with Businezz X, a <br /> professional Webflow template.
                            </h4>
                        </div>

                        <div className="mt-5">
                            <button className="btn btn-light buttonContactUs p-3">Contact us <i class="fi fi-rr-arrow-right mx-2"></i></button>
                        </div>
                    </div>
                </section>
            </div>

            <div className="col-12 col-md-6 backgroundColOficina" >
                <div className="white-box shadow  container" >
                    <section>
                        <div className="mb-4 pt-5">
                            <span className="containerBook ">Book your free consultation</span>
                        </div>

                        <h2 className="">Get a free consultation</h2>

                        <form>
                            <div className="d-flex justify-content-center  gap-3  mt-4">
                                <div>
                                    <input type="text" className="form-control p-3 rounded  input-placeholder" placeholder="Name" required />
                                </div>
                                <div>
                                    <input type="email" className="form-control p-3 rounded  input-placeholder" placeholder="contact@email.com" required />
                                </div>
                            </div>
                            <div>
                                <textarea className="form-control mt-3 w-100 rounded input-placeholder" rows="4" placeholder="Please type your message here..."></textarea>
                            </div>
                            <button className="w-100 mt-3 buttonSend btn btn-transparent border textButtonSend p-3"><b>Get in Touch</b></button>
                        </form>
                    </section>
                </div>
            </div>
        </header>
    );
};
