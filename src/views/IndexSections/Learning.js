import React from 'react'
// import Navbars from "views/IndexSections/Navbars.js";
import Navbars from "../../components/Navbars/IndexNavbar";
import image from "../../assets/project/images.png"
import python from "../../assets/project/python.jpg"
import sql from "../../assets/project/sql.jpg"
import Javaprogramming from "../../assets/project/Java-programming.png"
import image1 from "../../assets/project/images (4).jpg" 
import image2 from "../../assets/project/html.png"
function Learning() {
    return (
        <div>
            <Navbars />
            <header className="masthead text-center text-white d-flex img-fluid"
                // style="height:500px;background-image:url(https://miro.medium.com/max/10000/1*HLGtY6O2vUHqIyEbWdmBgA.jpeg);background-position:center;background-size:cover;">
                style={{ height: 500, backgroundImage: `url(https://miro.medium.com/max/10000/1*HLGtY6O2vUHqIyEbWdmBgA.jpeg)`, backgroundPosition: "center", backgroundSize: "cover" }}>
                <div className="container my-auto">

                </div>
            </header>
            <section id="about" className="mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col offset-lg-8 mx-auto text-center">
                            <h1 className="text-white section-heading">We've got what you need!</h1>

                            <h4 className="text-faded mb-4">LEARN VARIOUS PROGRAMMING LAGUAGES, ALL SEMESTER VTU NOTES AVAILABLE, BUILD
                     PROJECTS,GET INTERNSHIP,VTU QUESTION PAPERS, AND MUCH TO HELP YOU!!</h4>
                        </div>
                    </div>
                </div>
            </section>
            <section id="services" className="mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading">PRROGRAMMING LANGUAGES</h2>
                            <hr className="my-4" />
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <section id="" className="">
                    <div className="container-fluid p-0">
                        <div className="row no-gutters popup-gallery">
                            <div className="card-body">
                                <a className="" href={image}><img className="img-fluid"
                                    src={image} />
                                <div className="portfolio-box-caption">
                                    <div className="portfolio-box-caption-content">
                                        <div className="project-category text-faded"><span>Category</span></div>
                                        <div className="project-name"><span>COMMING SOON</span></div>
                                    </div>
                                </div>
                                </a>
                            </div>
                            <div className="card-body">
                                <a className="portfolio-box" href={python}><img
                                    className="img-fluid" src={python} />
                                <div className="portfolio-box-caption">
                                    <div className="portfolio-box-caption-content">
                                        <div className="project-category text-faded"><span>Category</span></div>
                                        <div className="project-name"><span>COMMING SOON</span></div>
                                    </div>
                                </div>
                                </a>
                            </div>
                            <div className="card-body">
                                <a className="portfolio-box" href={sql}><img
                                        className="img-fluid" src={sql} />
                                <div className="portfolio-box-caption">
                                    <div className="portfolio-box-caption-content">
                                        <div className="project-category text-faded"><span>Category</span></div>
                                        <div className="project-name"><span>COMMING SOON</span></div>
                                    </div>
                                </div>
                                </a>
                            </div>
                            <div className="card-body">
                                <a className="portfolio-box" href={Javaprogramming}><img
                                            className="img-fluid" src={Javaprogramming} />
                                <div className="portfolio-box-caption">
                                    <div className="portfolio-box-caption-content">
                                        <div className="project-category text-faded"><span>Category</span></div>
                                        <div className="project-name"><span>COMMING SOON</span></div>
                                    </div>
                                </div>
                                </a>
                            </div>
                            <div className="card-body">
                                <a className="portfolio-box" href={image1}><img
                                                className="img-fluid" src={image1} />
                                <div className="portfolio-box-caption">
                                    <div className="portfolio-box-caption-content">
                                        <div className="project-category text-faded"><span>Category</span></div>
                                        <div className="project-name"><span>COMMING SOON</span></div>
                                    </div>
                                </div>
                                </a>
                            </div>
                            <div className="card-body">
                                <a className="portfolio-box" href={image2}><img
                                                    className="img-fluid" src={image2} />
                                <div className="portfolio-box-caption">
                                    <div className="portfolio-box-caption-content">
                                        <div className="project-category text-faded"><span>Category</span></div>
                                        <div className="project-name"><span>COMMING SOON</span></div>
                                    </div>
                                </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="features-boxed">
                    <div className="container">
                        <div className="intro">
                            <h2 className="text-center">VTU NOTES </h2>
                            <p className="text-center">VTU NOTES FOR ALL BRANCHES AND FOR ALL SEMESTERS</p>
                        </div>
                        <div className="row justify-content-center features mt-5">
                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="name">COMPUTER SCIENCE</h3>
                                        <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
                                Praesent aliquam in tellus eu.</p><div className="text-center"><a className="btn btn btn-success mt-4" >EXPLORE </a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="name">INFORMATION SCIENCE</h3>
                                        <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
                                Praesent aliquam in tellus eu.</p><div className="text-center"><a className="btn btn btn-success mt-4" >EXPLORE </a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="card"><div className="card-body">
                                    <h3 className="name">ECE </h3>
                                    <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
                            Praesent aliquam in tellus eu.</p><div className="text-center"><a className="btn btn btn-success mt-4" >EXPLORE </a></div>
                                </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="card"><div className="card-body">
                                    <h3 className="name">TCE </h3>
                                    <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
                            Praesent aliquam in tellus eu.</p><div className="text-center"><a className="btn btn btn-success mt-4" >EXPLORE </a></div>
                                </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="card"><div className="card-body">
                                    <h3 className="name">CIVIL </h3>
                                    <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
                            Praesent aliquam in tellus eu.</p><div className="text-center"><a className="btn btn btn-success mt-4" >EXPLORE </a></div>
                                </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="card"><div className="card-body">
                                    <h3 className="name">MECHANICAL</h3>
                                    <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
                            Praesent aliquam in tellus eu.</p><div className="text-center"><a className="btn btn btn-success mt-4" >EXPLORE </a></div>
                                </div>
                                </div>
                            </div >
                        </div >
                    </div >
                </div >
                <div className="row mt-3">
                    <div className="col-xl-9 mx-auto">
                        <h4 className="text-center">SUBSCRIBE TO NEWSLETTER FOR TECHNICAL UPDATES</h4>
                        <h2 className="text-center">Ready to get started? Sign up now!</h2>
                    </div>
                    <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                        <form>
                            <div className="form-row">
                                <div className="col-12 col-md-9 mb-2 mb-md-0"><input type="email" className="form-control form-control-lg" placeholder="Enter your email..." /></div>
                                <div className="col-12 col-md-3"><button className="btn btn-primary btn-block " type="submit">Sign up!</button></div>
                            </div>
                        </form>
                    </div>
                </div>

            </div >
        </div >

    )
}

export default Learning
