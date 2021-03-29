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
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import asdf from "../../assets/project/logo.png"
import { useHistory } from "react-router-dom";
import "./style.scss";

export default function IndexNavbar() {
  let history = useHistory();
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  const scrollToDownload = () => {
    document
      .getElementById("download-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  function learning() {
    history.push("/Learning");
  }
  function Internship() {
    history.push("/Internship");
  }
  function Admissions() {
    history.push("/Admissions");
  }
  function Projects() {
    history.push("/Projects");
  }
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg" >
      <Container>
        <div className="navbar-translate" >
          <NavbarBrand to="/" tag={Link} id="navbar-brand">
            <a class="navbar-brand js-scroll-trigger" href="/" style={{ width: 100,marginTop :15 }}><img alt="sample" className="img-thumbnail" src={asdf} /></a>

          </NavbarBrand>

          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  VTU NATION
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
            {/* <Row>
              <Col className="navbar-toggler" xs="6">
               
                <Button
                  className="d-lg-block navbar-toggler"
                  color="default"
                  onClick={learning}
                >
                  LEARNING
              </Button>
               
              </Col>
            </Row>
            <Row>
              <Col className="navbar-toggler" xs="6">
               
                <Button
                  className="navbar-toggler d-lg-block"
                  color="default"
                  onClick={Admissions}
                >
                  ADMISSIONS
              </Button>
               
              </Col>
            </Row>
            <Row>
              <Col className="navbar-toggler" xs="6">
            
                <Button
                  className="navbar-toggler d-lg-block"
                  color="default"
                  onClick={Internship}
                >
                  INTERNSHIP
              </Button>
               
              </Col>
            </Row>
            <Row>
              <Col className="navbar-toggler" xs="6">
                
                <Button
                  className="navbar-toggler d-lg-block"
                  color="default"
                  onClick={Projects}
                >
                  PROJECTS
              </Button>
          
              </Col>
            </Row> */}
          </div>
          <Nav navbar>
            <NavItem>
              <Button
                className="btn btn "
                color="default"
                onClick={learning}
                size="sm"
                style ={{width :113,marginTop :15}}
              >
                LEARNING
              </Button>
            </NavItem>
            <NavItem>
              <Button
                className="btn btn"
                color="default"
                onClick={Admissions}
                size="sm"
                style ={{width :113,marginTop :15}}
              >
                ADMISSIONS
              </Button>
            </NavItem>
            <NavItem>
              <Button
                className="btn btn"
                color="default"
                onClick={Internship}
                size="sm"
                style ={{width :113,marginTop :15}}
              >
                INTERNSHIP
              </Button>
            </NavItem>
            <NavItem>
              <Button
                className="btn btn"
                color="default"
                onClick={Projects}
                size="sm"
                style ={{width :113,marginTop :15}}
              >
                PROJECTS
              </Button>
            </NavItem>
            <NavItem>
              <Button
                className="btn btn btn-success"
                color="default"
              // onClick={scrollToDownload}
              size="sm"
              style ={{width :113,marginTop :15}}
              >
                LogIn
              </Button>
            </NavItem>
            <NavItem>
              <Button
                className="btn btn btn-success"
                color="default"
              // onClick={scrollToDownload}
              size="sm"
              style ={{width :113,marginTop :15}}
              >
                SignUp
              </Button>
            </NavItem>
            <NavItem>
              <Button
                className="btn btn btn-success"
                color="default"
              // onClick={scrollToDownload}
              size="sm"
              style ={{width :113,marginTop :15}}
              >
                LOGOUT
              </Button>
            </NavItem>
          {/* <div className="collapse navbar-collapse" id="navbarResponsive"> */}
          {/* <ul className="ml-auto navbar-nav">
            <li className="dropdown nav-item"><a className="nav-link"
            ><NavItem>
                <Button
                  className="nav-link d-none d-lg-block"
                  color="default"
                  onClick={learning}
                >
                  LEARNING
                </Button>
              </NavItem></a></li>
            <li className="dropdown nav-item"><a className="nav-link"
            > <NavItem>
                <Button
                  className="nav-link d-none d-lg-block"
                  color="default"
                  onClick={Admissions}
                >
                  ADMISSIONS
                </Button>
              </NavItem></a></li>
            <li className="dropdown nav-item"><a className="nav-link"
            > <NavItem>
                <Button
                  className="nav-link d-none d-lg-block"
                  color="default"
                  onClick={Internship}
                >
                  INTERNSHIP
                </Button>
              </NavItem></a></li>
            <li className="dropdown nav-item"><a className="nav-link"
            > <NavItem>
                <Button
                  className="nav-link d-none d-lg-block"
                  color="default"
                  onClick={Projects}
                >
                  PROJECTS
                </Button>
              </NavItem></a></li>

          </ul> */}
          {/* <span className="navbar-text actions"><a className="login h4 btn btn btn-success"
              >Log In</a><a
                className="btn btn btn-success"
              > Sign Up</a > <a
                className="btn btn btn-success"  > LOGOUT</a ></span > */}
          {/* </div > */}
          {/* <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://twitter.com/CreativeTim"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on Twitter"
              >
                <i className="fab fa-twitter" />
                <p className="d-lg-none d-xl-none">Twitter</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/CreativeTim"
                rel="noopener noreferrer"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fab fa-facebook-square" />
                <p className="d-lg-none d-xl-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/CreativeTimOfficial"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fab fa-instagram" />
                <p className="d-lg-none d-xl-none">Instagram</p>
              </NavLink>
            </NavItem> */}
          {/* <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-cogs d-lg-none d-xl-none" />
                Getting started
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">
                <DropdownItem href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/overview">
                  <i className="tim-icons icon-paper" />
                  Documentation
                </DropdownItem>
                <DropdownItem tag={Link} to="/register-page">
                  <i className="tim-icons icon-bullet-list-67" />
                  Register Page
                </DropdownItem>
                <DropdownItem tag={Link} to="/landing-page">
                  <i className="tim-icons icon-image-02" />
                  Landing Page
                </DropdownItem>
                <DropdownItem tag={Link} to="/profile-page">
                  <i className="tim-icons icon-single-02" />
                  Profile Page
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <Button
                className="nav-link d-none d-lg-block"
                color="primary"
                target="_blank"
                href="https://www.creative-tim.com/product/blk-design-system-pro-react?ref=bdsr-user-archive-index-navbar-upgrade-pro"
              >
                <i className="tim-icons icon-spaceship" /> Upgrade to PRO
              </Button>
            </NavItem>
            <NavItem>
              <Button
                className="nav-link d-none d-lg-block"
                color="default"
                onClick={scrollToDownload}
              >
                <i className="tim-icons icon-cloud-download-93" /> Download
              </Button>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
