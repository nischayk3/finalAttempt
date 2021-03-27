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
import ΤΗΛΕΚΑΤΑΡΤΙΣΗ from "../../assets/project/ΤΗΛΕΚΑΤΑΡΤΙΣΗ.jpg";
import internship from "../../assets/project/internship (2).jpg";
import Sastramtechadmission from "../../assets/project/Sastra-mtech-admission.png"

// reactstrap components
import { Container } from "reactstrap";
import { UncontrolledCarousel } from "reactstrap";

export default function PageHeader() {
  const carouselItems = [
    {
      src:ΤΗΛΕΚΑΤΑΡΤΙΣΗ,
      altText: "Slide 1",
      caption: ""
    },
    {
      src:internship,
      altText: "Slide 2",
      caption: ""
    },
    {
      src:
      Sastramtechadmission,
      altText: "Slide 3",
      caption: ""
    }
  ];
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      {/* <Container> */}
      {/* <div className="content-center brand">
          <h1 className="h1-seo">VTU NATION</h1>
          <h3 className="d-none d-sm-block">
           One Stop Solution for all VTU Needs.
          </h3>
        </div> */}
      <UncontrolledCarousel items={carouselItems} />
      {/* <Container>
       
      </Container> */}
    </div >
  );
}
