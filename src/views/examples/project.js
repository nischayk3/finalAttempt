import React from 'react'
import Navbars from "../../components/Navbars/IndexNavbar";
import image1 from "../../assets/project/project-planning-header@2x.png"
import design from "../../assets/project/bwd-website-design-project-plan-2.png"
import help from "../../assets/project/help-your-iot-project.jpg"
import ML from "../../assets/project/ML.jpg"
import dribbble from "../../assets/project/dribbble_financial_app_superlen.png"
import contact from "../../assets/project/contact.jpg"
function project() {
    return (
        <div>
            <Navbars />
            <header className="masthead text-center text-white d-flex img-fluid"
                // style="height:500px;background-image:url(https://miro.medium.com/max/10000/1*HLGtY6O2vUHqIyEbWdmBgA.jpeg);background-position:center;background-size:cover;">
                style={{ height: 500, backgroundImage: `url(${image1})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                <div className="container my-auto">

                </div>
            </header>
            <div class="container mt-5 mb-0">
                <div class="row">
                    <div class="col offset-lg-8 mx-auto text-center">
                        <h2 class="text-white section-heading mb-2">Stop waiting.Start building.</h2>
                        <hr class="star-light" style={{ width: "50%", margin: "auto" }} />
                    </div>
                </div>
            </div>
            <div class="container mt-3">
                <div class="content-section-heading text-center">
                    <h2 class="mb-5">Get All Projects As Per VTU Guidelines</h2>
                </div>
                <div class="row no-gutters">
                    <div class="col-lg-5 ">
                        <img class="img-fluid" src={design} />
                        <div class="caption">
                            <div class="caption-content">
                                <h2><a>Web Development projects</a></h2>
                                <p class="mb-0"></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-1 "></div>
                    <div class="col-lg-5  ">
                        <img class="img-fluid" src={help} />
                        <div class="caption">
                            <div class="caption-content">
                                <h2><a>IOT Projects</a></h2>
                                <p class="mb-0"></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 ">
                        <img class="img-fluid" src={ML} />
                        <div class="caption">
                            <div class="caption-content">
                                <h2><a>ML Projects</a></h2>
                                <p class="mb-0"></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-1 "></div>
                    <div class="col-lg-5 ">
                        <img class="img-fluid" src={dribbble} />
                        <div class="caption">
                            <div class="caption-content">
                                <h2><a>Mobile apps</a></h2>
                                <p class="mb-0"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-12 text-center mt-5">
                <h2 class="section-heading">For any Queries Related Projects </h2>

                <h3 class="section-heading">Feel Free to Contact Us!!</h3>

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
        </div>
    )
}

export default project
