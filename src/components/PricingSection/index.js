import React from "react";
import "./PricingSection.css";
const PricingSection = () => {
  return (
    <div>
      <section className="white-section" id="pricing">
        <h2 className="section-heading">A Plan for Everybody Needs</h2>
        <p>Simple and affordable price plans for your.</p>

        <div className="row">
          <div className=" pricing-column col-lg-4 col-md-6">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Normal</h3>
              </div>
              <div className="card-body">
                <h2 className="price-text">150zł / mo</h2>
                <p>unlimited entry</p>
                <p>Various discounts in our shop</p>
                <p>One free personal training</p>
                {/* <button type="button" class="btn btn-outline-dark btn-lg btn-block">Take it</button> */}
              </div>
            </div>
          </div>

          <div className="pricing-column col-lg-4 col-md-6">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Student</h3>
              </div>
              <div className="card-body">
                <h2 className="price-text">200zł / mo</h2>
                <p>Entry beatween 06:00-24:00 except for friday and weekends</p>
                <p>1 free personal training</p>
                <p>Free samples of proteins</p>
                <p>Ability to freeze the membership</p>
                {/* <button type="button" class="btn btn-dark btn-lg btn-block">Take it</button> */}
              </div>
            </div>
          </div>

          <div className="pricing-column col-lg-4 col-md-6">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Master</h3>
              </div>
              <div className="card-body">
                <h2 className="price-text">250zł / mo</h2>
                <p>unlimited entry</p>
                <p>1 free lock</p>
                <p>1 free personal training</p>
                <p>Ability to freeze the membership</p>
                {/* <button type="button" class="btn btn-dark btn-lg btn-block">Take it</button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingSection;
