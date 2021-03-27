/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// import classNamenames from "classNamenames";
// plugin that creates slider
import Slider from "nouislider";
import asdf from "../../assets/project/1_LMEECiXhk715h-VCFyb-GA.jpeg"
import admission from "../../assets/project/admission.png"
import internship from "../../assets/project/internship (2).jpg"
import ProjectManagement from "../../assets/project/ProjectManagement.jpg"
// import ProjectManagement from "../../assets/project/ProjectManagement.jpg"
// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  CustomInput,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Basics() {
  const [inputFocus, setInputFocus] = React.useState(false);
  // const slider1 = React.useRef(null);
  // const slider2 = React.useRef(null);
  // React.useEffect(() => {
  //   Slider.create(slider1.current, {
  //     start: [40],
  //     connect: [true, false],
  //     step: 1,
  //     range: { min: 0, max: 100 },
  //   });
  //   Slider.create(slider2.current, {
  //     start: [20, 60],
  //     connect: [false, true, false],
  //     step: 1,
  //     range: { min: 0, max: 100 },
  //   });
  // },[]);
  return (
    <Container>
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <section id="services" className=" text-white text-center">
        <div className="container">
          <div className="content-section-heading">
            <h3 className="text-secondary mb-0" style={{ marginTop: 40 }}>Services</h3>
            <h2 className="mb-5">What We Offer</h2>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-5 mb-lg-0"><span className="mx-auto service-icon rounded-circle mb-3"><i
              className="tim-icons icon-laptop" style={{ fontSize: 80, color: "#28a745" }}></i></span>
              <h4><strong>LEARN TO CODE</strong></h4>
              <p className="mb-0 text-faded">Learn from best material in market</p>
            </div>
            <div className="col-md-6 col-lg-3 mb-5 mb-lg-0"><span className="mx-auto service-icon rounded-circle mb-3"><i
              className="tim-icons icon-istanbul" style={{ fontSize: 80, color: "#28a745" }}></i></span>
              <h4><strong>ADMISSIONS</strong></h4>
              <p className="mb-0 text-faded">Admissions in Bangalore</p>
            </div>
            <div className="col-md-6 col-lg-3 mb-5 mb-lg-0"><span className="mx-auto service-icon rounded-circle mb-3"><i
              className="tim-icons icon-book-bookmark" style={{ fontSize: 80, color: "#28a745" }}></i></span>
              <h4><strong>INTERNSHIP</strong></h4>
              <p className="mb-0 text-faded"><span>Certified Training+Internship</span></p>
            </div>
            <div className="col-md-6 col-lg-3 mb-5 mb-lg-0"><span className="mx-auto service-icon rounded-circle mb-3"><i
              className="tim-icons icon-app" style={{ fontSize: 80, color: "#28a745" }}></i></span>
              <h4><strong>PROJECTS</strong></h4>
              <p className="mb-0 text-faded">Projects to Level Up Skills</p>
            </div>
          </div>
        </div>
      </section>
      <section className="showcase ">
        <div className="container-fluid p-0">
          <div className="container p-0">
            <div className="row no-gutters">
              <div className="col-lg-6 order-lg-2 text-white showcase-img">
              <img className="img-thumbnail" src={asdf} style={{ marginTop: 40 }}/>
              </div>
              <div className="col-lg-6 my-auto order-lg-1 showcase-text mt-2">
                <div className="text-center">
                  <h2 >LEAR WHATS TRENDING</h2>
                  <h4>GET STARTED WITHOUT WASTING TIME SEARCHING RIGHT CONTENT.WE HAVE COURSES THAT ARE BEST TO UPGRADE YOUR SKILLS</h4>
                  <div className="text-center"><a className="btn btn btn-success mt-4">EXPLORE </a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-6 text-white showcase-img" >
            <img className="img-thumbnail" src={admission} style={{ marginTop: 40 }}/>
            </div>
            <div className="col-lg-6 my-auto order-lg-1 showcase-text mt-2">
              <div className="text-center">
                <h2 className="ml-2">GET ADMISSIONS IN TOP COLLAGES OF KARNATAKA</h2>
                <h4>SEARCHING FOR COLLAGES? IF YOU HAVE RECENTLY FINISHED YOUR PUC/12 GET IN TOUCH WITH TO GET ADMISSION IN TOP COLLAGES OF BANGALORE!!</h4>
                <div className="text-center"><a className="btn btn btn-success mt-4">EXPLORE </a></div>
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-6 order-lg-2 text-white showcase-img ">
            <img className="img-thumbnail" src={internship} style={{ marginTop: 40 }}/>
            </div>
            <div className="col-lg-6 my-auto order-lg-1 showcase-text mt-2">
              <div className="text-center">
                <h2 >LOOKING FOR INTERNSHIP??</h2>
                <h4>WE WILL GUIDE YOU TO GET INTERNSHIP, NO MATTER IF YOU ARE IN 1ST YEAR OR 2ND YEAR.   GET PAID INTERNSHIP IN BANGALORE. GET IN TOUCH WITH US!!</h4>
                <div className="text-center"><a className="btn btn btn-success mt-4">EXPLORE </a></div>
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-6 text-white showcase-img" >
            <img className="img-thumbnail" src={ProjectManagement} style={{ marginTop: 40 }}/>
            </div>
            <div className="col-lg-6 my-auto order-lg-1 showcase-text mt-2">
              <div className="text-center">
                <h2 className="ml-2">STUCK WITH PROJECTS??</h2>
                <h4>GET GUIDENCE FOR SELECTING PROJECT WHICH CAN HELP YOU LEARN IN-DEMAND SKILLS TO GET JOB EASILY.GET IN TOUCH WITH US FOR MORE INFORMATION</h4>
                <div className="text-center"><a className="btn btn btn-success mt-4">EXPLORE </a></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className=" text-white text-center mt-5">
        <div className="container">
          <div className="content-section-heading">
            <h3 className="text-secondary mb-0">VTU NOTES</h3>
            <h2 className="mb-5">FOR ALL SEMESTERS</h2>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-5 mb-lg-0">
              <div className="card" >
                <div className="card-body bg-#adb5bd">
                  <h4><strong>FIRST YEAR</strong></h4>
                  <div className="text-center"><a className="btn btn btn-primary mt-4" >VIEW NOTES</a></div>
                  <p className="mb-0 text-faded"></p>
                </div>
              </div>

            </div>
            <div className="col-md-6 col-lg-3 mb-5 mb-lg-0 ">

              <div className="card ml-2" >
                <div className="card-body">
                  <h4><strong>SECOND YEAR</strong></h4>
                  <div className="text-center"><a className="btn btn btn-success mt-4" >VIEW NOTES</a></div>
                  <p className="mb-0 text-faded"></p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-5 mb-lg-0">
              <div className="card ml-2" >
                <div className="card-body">
                  <h4><strong>THIRD YEAR</strong></h4>
                  <div className="text-center"><a className="btn btn btn-warning mt-4" >VIEW NOTES</a></div>
                  <p className="mb-0 text-faded"></p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-5 mb-lg-0">
              <div className="card ml-2" >
                <div className="card-body">
                  <h4><strong>FOURTH YEAR</strong></h4>
                  <div className="text-center"><a className="btn btn btn-WARNING mt-4">VIEW NOTES</a></div>
                  <p className="mb-0 text-faded"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" class="mt-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto text-center">
              <h2 class="section-heading">Let&#39;s Get In Touch!</h2>
              <hr class="my-4" />
              <p class="mb-5">Ready to start your next project with us? That&#39;s great! Give us a call or send us an email and we will get back to you as soon as possible!</p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 ml-auto text-center"><i class="fa fa-phone fa-3x mb-3 sr-contact" style={{ fontSize: 50, color: "#28a745" }}></i>
              <p>9108558715</p>
            </div>
            <div class="col-lg-4 mr-auto text-center"><i
              class="tim-icons icon-email-85" style={{ fontSize: 50, color: "#28a745" }}></i>
              <p><a href="mailto:your-email@your-domain.com">nischayk3@gmail.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </Container>

  );
}
