import React from "react";
import './PricingSection.css'
const PricingSection = () => {
  return (
    <div>
        <section class="white-section" id="pricing">

<h2 class="section-heading">A Plan for Everybody Needs</h2>
<p>Simple and affordable price plans for your.</p>



  <div class="row">
      
    <div class=" pricing-column col-lg-4 col-md-6">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Normal</h3>
        </div>
        <div class="card-body">
          <h2 class="price-text">150zł / mo</h2>
          <p>unlimited entry</p>
          <p>Various discounts in our shop</p>
          <p>One free personal training</p>
          {/* <button type="button" class="btn btn-outline-dark btn-lg btn-block">Take it</button> */}
        </div>
      </div>
    </div> 

    <div class="pricing-column col-lg-4 col-md-6">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Student</h3>
        </div>
        <div class="card-body">
          <h2 class="price-text">200zł / mo</h2>
          <p>Entry beatween 06:00-24:00 except for friday and weekends</p>
          <p>1 free personal training</p>
          <p>Free samples of proteins</p>
          <p>Ability to freeze the membership</p>
          {/* <button type="button" class="btn btn-dark btn-lg btn-block">Take it</button> */}
        </div>
      </div>
    </div>

    <div class="pricing-column col-lg-4 col-md-6">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Master</h3>
        </div>
        <div class="card-body">
          <h2 class="price-text">250zł / mo</h2>
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
