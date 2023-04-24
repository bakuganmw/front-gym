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
          <h3 class="card-title">Starter</h3>
        </div>
        <div class="card-body">
          <h2 class="price-text">$5 / mo</h2>
          <p>5 wejsc</p>
          <p>10 wejsc</p>
          <p>1 wejsc</p>
          <button type="button" class="btn btn-outline-dark btn-lg btn-block">Take it</button>
        </div>
      </div>
    </div> 

    <div class="pricing-column col-lg-4 col-md-6">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Advance</h3>
        </div>
        <div class="card-body">
          <h2 class="price-text">$49 / mo</h2>
          <p>Unlimited wejsc</p>
          <p>Unlimited wejsc</p>
          <p>Unlimited wejsc</p>
          <button type="button" class="btn btn-dark btn-lg btn-block">Take it</button>
        </div>
      </div>
    </div>

    <div class="pricing-column col-lg-4 col-md-6">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Master</h3>
        </div>
        <div class="card-body">
          <h2 class="price-text">$99 / mo</h2>
          <p>Pirority wejscie</p>
          <p>Unlimited wejscie</p>
          <p>Unlimited wejscie</p>
          <p>Unlimited wejscie</p>
          <button type="button" class="btn btn-dark btn-lg btn-block">Take it</button>
        </div>
      </div>
    </div>
  </div>  

</section>
    </div>
  );
};

export default PricingSection;
