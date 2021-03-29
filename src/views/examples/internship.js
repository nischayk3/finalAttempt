import React from 'react'
import Navbars from "../../components/Navbars/IndexNavbar";
import image1 from "../../assets/project/InternshipDiagram.jpg"
import image2 from "../../assets/project/V-internship.jpg"
import oraclenischay from ".../../assets/project/oraclenischay.png"
import ibm from "../../assets/project/ibm.png"
import papanis from "../../assets/project/papanis.png"
import botnis from "../../assets/project/botnis.png"
import nischaylittle from "../../assets/project/nischay-little.jpg"
import contact from "../../assets/project/contact.jpg"
function internship() {
    return (
        <div>
            <Navbars />
            <header className="masthead text-center text-white d-flex img-fluid"
                // style="height:500px;background-image:url(https://miro.medium.com/max/10000/1*HLGtY6O2vUHqIyEbWdmBgA.jpeg);background-position:center;background-size:cover;">
                style={{ height: 500, backgroundImage: `url(${image1})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                <div className="container my-auto">

                </div>
            </header>
            <div class="container mt-3">
                <div class="row">
                    <div class="col offset-lg-8 mx-auto text-center">
                        <h2 class="text-white section-heading mt-5">We've Collabration with best Companie's in Bangalore</h2>
                        <div class="row no-gutters popup-gallery">
                            <div class="card-body">
                                <a class="" href={oraclenischay}><img class="img-fluid"
                                    src={oraclenischay} />

                                </a></div>
                            <div class="card-body"><a class="portfolio-box" href={ibm}><img
                                class="img-fluid" src={ibm} />

                            </a></div>
                            <div class="card-body"><a class="portfolio-box" href={papanis}><img
                                class="img-fluid" src={papanis} />

                            </a></div>
                            <div class="card-body"><a class="portfolio-box" href={botnis}><img
                                class="img-fluid" src={botnis} />

                            </a></div>
                            <div class="card-body"><a class="portfolio-box" href={nischaylittle}><img
                                class="img-fluid" src={nischaylittle} />

                            </a></div>
                        </div>
                        <h3 class="text-faded mb-4">Get in Office Training + Internship and Work from home Internship in Bangalore,
                Paid/Unpaid</h3>
                        <h3 class="text-faded mb-4">On successfull completion of internship get Certificate, Letter of
                Recommendation and Job Offer. </h3>
                    </div>
                </div>
            </div>
            <div class="col-lg-12 text-center mt-5">
                <h2 class="section-heading">In First Year/Second Year/Third Year/Fourth Year ??</h2>
                <h4 class="section-heading">Being in any year You can apply for Internship!!</h4>
                <h3 class="section-heading">Feel Free to Contact Us For Internship</h3>

            </div>
            <section id="contact" class="mt-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 text-center">
                            <img src={contact} />
                        </div>
                        <div class="col-lg-6 text-center">
                            <h2 class="text-uppercase section-heading">Contact Us</h2>




                            <form id="contactForm" >
                                <div class="form-row">
                                    <div class="col col-md-6">
                                        <div class="form-group"><input type="text" class="form-control" id="name"
                                            placeholder="Your Name *" name="firstName" required /><small
                                                class="form-text text-danger flex-grow-1 help-block lead"></small></div>
                                        <div class="form-group"><input type="email" class="form-control" id="email"
                                            placeholder="Your Email *" name="email" required /><small
                                                class="form-text text-danger help-block lead"></small></div>
                                        <div class="form-group"><input type="tel" class="form-control" placeholder="Your Phone *" name="phnumber"
                                            required /><small class="form-text text-danger help-block lead"></small></div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group"><textarea class="form-control" id="message"
                                            placeholder="Your Message *" name="message" required></textarea><small
                                                class="form-text text-danger help-block lead"></small></div>
                                    </div>
                                    <div class="col">
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="col-lg-12 text-center">
                                        <div id="success"></div><button class="btn btn-primary btn-xl text-uppercase"
                                            id="sendMessageButton" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default internship
