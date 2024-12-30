import React from "react";
import "./About.css"; // Optional: You can add custom styling in this CSS file
import Collabs from "../Home/Collabs";
import Brands from "../Home/Brands";

const About = () => {
  return (
    <>
      <section className="about-us-section py-40 bg-light">
        <div className="container">
          {/* Hero Section */}
          <div className="row align-items-center mx-5 py-36 ">
            <div className="col-lg-6 my-4 mb-lg-0">
              <h5 className="font-weight-bold text-primary mb-3 flex-align-start">
                About <span className="text-dark">Mega Trade Inc</span>
              </h5>
              <h2 className="mb-3">
                Your trusted partner for workplace solutions since 2017.
              </h2>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src="https://buroneed.com/wp-content/uploads/2020/02/about-banner-01-2.jpg"
                alt="About Mega Trade Inc"
                className="img-fluid rounded shadow"
                style={{ maxHeight: "400px" }}
              />
            </div>
          </div>
          <div className="row">
            <p className="text-dark">
              We specialize in high-quality office supplies, housekeeping
              consumables, pantry essentials, and more, ensuring reliable and
              consistent service tailored to your corporate needs.
            </p>
          </div>
          {/* Vision & Mission */}
          <div className="row text-center my-36 ">
            <div className="col-md-6">
              <div className="p-40 bg-white rounded shadow-sm">
                <h3 className="text-primary font-weight-bold mb-2">
                  Our Vision
                </h3>
                <p className="text-muted">
                  Worry-free administrators and <br />
                  facilities managers.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-40 bg-white rounded shadow-sm">
                <h3 className="text-primary font-weight-bold mb-2">
                  Our Mission
                </h3>
                <p className="text-muted">
                  To provide honest, no-nonsense, timely, and consistent quality
                  supplies for workplace needs, enabling peace of mind.
                </p>
              </div>
            </div>
          </div>
          <div className="row text-center my-36">
            <div className="col-md-6">
              <div className="p-40 bg-white rounded shadow-sm">
                <h3 className="text-primary font-weight-bold mb-2">
                  Why Choose Mega Trade Inc?
                </h3>
                <p className="text-muted">
                  Our innovative housekeeping chemicals, comparable to TASKI and
                  3M, can reduce your facilities management costs by up to 30%.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-40 bg-white rounded shadow-sm">
                <h3 className="text-primary font-weight-bold mb-2">
                  Our Core Values
                </h3>
                <ul className="text-muted">
                  <li>Integrity towards quality</li> 
                  <li>WYSIWYG – "What You Say is What You
                  Get"</li>  
                  <li>Honest and consistent supplies</li> 
                  <li>Quick turnaround time for
                  all orders</li> 
                  <li>Nationwide reach with PAN India supplies</li>
                </ul>
              </div>
            </div>
          </div>


          {/* Product Range */}
          <div className="text-center mb-5">
            <h2 className="font-weight-bold text-primary mb-40">
              Our Product Range
            </h2>
            <div className="row">
              <div className="col-md-4">
                <div className="p-40 bg-white rounded shadow-sm">
                  <h4 className="text-dark mb-20">The Works (Stationery)</h4>
                  <p className="text-muted">
                    Papers, sticky notes, pens, printer cartridges, and more.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-40 bg-white rounded shadow-sm">
                  <h4 className="text-dark mb-20">
                    Shine & Bright (Housekeeping)
                  </h4>
                  <p className="text-muted">
                    Cleaning chemicals, tissue products, and safety equipment.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-40 bg-white rounded shadow-sm">
                  <h4 className="text-dark mb-20">Eat & Drink (Pantry)</h4>
                  <p className="text-muted">
                    Cookies, energy bars, soft drinks, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="row text-center my-20">
            <div className="col-md-4">
              <div className="p-40 bg-secondary text-white rounded shadow-sm">
                <h2 className="text-white">250+</h2>
                <p>Satisfied Clients</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-40 bg-secondary text-white rounded shadow-sm">
                <h2 className="text-white">8+</h2>
                <p>Years of Experience</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-40 bg-secondary text-white rounded shadow-sm">
                <h2 className="text-white">Pan India</h2>
                <p>Locations Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Brands />
    </>
  );
};

export default About;
