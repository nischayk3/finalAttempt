import React from 'react'
import Navbars from "../../components/Navbars/IndexNavbar";
import image from "../../assets/project/adults-black-and-white-casual-1374542.jpg"
import image1 from "../../assets/project/cropped-banner-3.jpg"
import image2 from "../../assets/project/contact-us2.jpg"
function admission() {
    return (
        <div>
            <Navbars />
            <header className="masthead text-center text-white d-flex img-fluid"
                // style="height:500px;background-image:url(https://miro.medium.com/max/10000/1*HLGtY6O2vUHqIyEbWdmBgA.jpeg);background-position:center;background-size:cover;">
                style={{ height: 500, backgroundImage: `url(${image})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                <div className="container my-auto">

                </div>
            </header>
            <h2 class="text-white text-center  mt-5">LOOKING FOR ADMISSIONS IN BANGALORE.. ??</h2>
            <div class="container mt-5">
                <div class="row">
                    <div class="col-md-6">
                        <table class="table">
                            <tbody>
                                <tr>
                                    <h1>LIST OF COLLAGES</h1>
                                </tr>
                                <tr>
                                    <td><h4>RV COLLEGE OF ENGINEERING</h4></td>
                                </tr>
                                <tr>
                                    <td> <h4>BMS INSTITUTE OF TECHNOLOGY & MANAGEMENT</h4></td>
                                </tr>
                                <tr>
                                    <td> <h4>NITTE MEENAKSHI INSTITUTE OF TECHNOLOGY</h4></td>
                                </tr>
                                <tr>
                                    <td><h4>SJB INSTITUTE OF TECHNOLOGY</h4><a href="#"><p>VIEW FULL LIST</p></a></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div class="col-md-6">
                        <img class="img-responsive" src={image1} style={{ height: 300 }} />
                    </div>
                </div>
            </div>
            <h2 class="text-white text-center mt-5">GET ADMISSION IN COLLAGE OF YOUR CHOICE.. FEEL FREE TO CONTACT US!!</h2>
            <section id="contact" class="mt-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 text-center">
                            <img src={image2} />
                        </div>
                        <div class="col-lg-6 text-center">
                            <h2 class="text-uppercase section-heading">Contact Us</h2>




                            <form id="contactForm" novalidate="novalidate">
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

export default admission
