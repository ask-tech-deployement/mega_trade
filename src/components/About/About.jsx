import React from "react";
import "./About.css"; // Optional: You can add custom styling in this CSS file
import Collabs from "../Home/Collabs";
import Brands from "../Home/Brands";

const About = () => {
  return (
    <>
      <section className="about-us-section py-48">
        <div className="container">
          {/* Header */}
          <div className="text-center mt-18 mb-56">
            <h1 className="display-4 font-weight-bold">
              ABOUT <span style={{ color: "blue" }}></span>Mega Trade Inc
            </h1>
            <p className="lead text-muted">
              Complete Office Supplies Solutions
            </p>
            <p className="h5 text-muted mb-20">
              Create a Creative Workspace With Us
            </p>
          </div>

          {/* About Us Description */}
          <div className="row mb-5">
            <div className="col-lg-6">
              <p className="lead text-dark">
              Mega Trade Inc is a trusted workplace solutions provider established in 2017 and headquartered in Bangalore, India. We specialize in supplying stationery, office consumables, pantry essentials, housekeeping supplies, and equipment to corporate clients. Our services are tailored to meet the unique needs of administrators and facilities managers, offering them peace of mind with reliable, timely, and consistent quality supplies.
              </p>
              <p className="lead text-dark">
              Our team of dedicated professionals brings a collective experience of over 40 years in corporate supply, ensuring seamless service delivery and customer satisfaction. With operations spanning Bangalore, Chennai, and Mumbai, MTI leverages its extensive industry expertise to cater to diverse workplace requirements.
              </p>
              <p className="lead text-dark">
              In addition, we have developed high-quality housekeeping (cleaning) chemicals that match the performance of leading brands like TASKI and 3M. These innovative products can help you reduce your facilities management costs for chemicals by up to 30%, ensuring both efficiency and affordability without compromising on quality.

              </p>
            </div>
            <div className="col-lg-6">
              <img
                src="https://buroneed.com/wp-content/uploads/2020/02/about-banner-01-2.jpg"
                alt="About Us"
                className="img-fluid rounded-52"
              />
            </div>
          </div>

          {/* What Makes Us Unique */}
          <div className="row my-56">
            <div className="col-12 text-center">
              <h2 className="text-dark font-weight-bold my-36 text-primary-400">
                What Makes Us Unique
              </h2>
              <p className="h6 text-muted">
              At MTI, we believe in delivering honest, no-nonsense solutions that empower businesses to focus on their core operations. We emphasize eco-friendly and sustainable practices, integrating recycled products into our offerings wherever possible. Our commitment to transparency, quality, and sustainability sets us apart in the industry.
              </p>
            </div>
          </div>

          {/* Statistics and Collaborations */}
          <div className="row text-center my-56">
            <div className="col-md-4">
              <div className="stat-card p-4 rounded shadow-sm">
                <h3 className="text-dark">250+</h3>
                <p className="text-muted">Satisfied Clients</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stat-card p-4 rounded shadow-sm">
                <h3 className="text-dark">8+</h3>
                <p className="text-muted">Years of Experience</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stat-card p-4 rounded shadow-sm">
                <h3 className="text-dark">Pan India</h3>
                <p className="text-muted">Locations Served</p>
              </div>
            </div>
          </div>

          {/* Meet The Team */}
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="text-dark font-weight-bold mb-3 text-warning-700">
                Meet The Team
              </h2>
              <div className="team-member my-36 ">
                <h4 className="text-dark font-weight-bold">
                  Founder: Kishor Patel
                </h4>
                <p className="text-muted">
                  Kishor Patel, founder of Mega Trade Inc Supplies, with his 15+ years
                  of experience in the corporate stationery industry, has made
                  superior connections and brought Mega Trade Inc to where it is
                  today.
                </p>
              </div>
              <div className="team-member my-36">
                <h4 className="text-dark font-weight-bold">
                  Co-Founder: Vikas Patel
                </h4>
                <p className="text-muted">
                  Vikas Patel, co-founder of Mega Trade Inc Supplies, with his 10+
                  years of experience, has really accelerated Mega Trade Inc and made
                  it deserving of its clients.
                </p>
              </div>
            </div>
          </div>
          <Collabs />
        </div>
      </section>
      <Brands />
    </>
  );
};

export default About;
