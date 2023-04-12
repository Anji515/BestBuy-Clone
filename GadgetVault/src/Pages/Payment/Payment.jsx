import React from 'react'
import "./Payment.css"
import { Link } from 'react-router-dom'

const Payment = () => {

  const handlePayment=() => {
    alert("Payment Successfull.")
    localStorage.removeItem("Cart")
  }

  return (
    <div>

<div class="mainContainer">
  <div class="overlay_blur hidden"></div>
  <div class="notification_container hidden">
    <h1>Your order has been placed !</h1>
    <a href="/Home page/Index.html"><button class="btn"><i class="fa fa-home"></i> Home</button></a>
  </div>
  <div class="mainInfoCard">
    <div class="headImage">
      <img src="https://cdn.shopify.com/s/files/1/0590/4095/6580/files/Untitled_design_x320.png?v=1643627388"
        alt="icon" />
    </div>
    <form class="input-box">
    
      <h2 class="ship-add">Information</h2>
      <select name="countryCode" id="countrySelect" required="" class="form-input">
        <option value="US">Country/Region</option>
        <option value="US">United States</option>
        <option value="IN">India</option>
        <option disabled="" value="">---</option>
        <option value="AU">Australia</option>
        <option value="CA">Canada</option>
        <option value="CN">China</option>
        <option value="FR">France</option>
        <option value="HK">Hong Kong SAR</option>
        <option value="IN">India</option>
        <option value="IL">Israel</option>
        <option value="MY">Malaysia</option>
        <option value="MU">Mauritius</option>
        <option value="NP">Nepal</option>
        <option value="NZ">New Zealand</option>
        <option value="SG">Singapore</option>
        <option value="ZA">South Africa</option>
        <option value="GB">United Kingdom</option>
        <option value="US">United States</option>
      </select>
      <input type="text" id="firstName" name="firstName" placeholder="First name" class="form-input" required />
      <input type="text" id="lastName" name="lastName" placeholder="Last name" class="form-input" required />
     
      <input type="text" id="address" name="" class="form-input full-width" required placeholder="Address" />
     
      <div class="form-row">
        <input type="text" id="city" name="" placeholder="City" class="form-input" required />
        <input type="text" id="" name="" placeholder="company (optional)" class="form-input" />
        <input type="number" id="pincode" name="" placeholder="PIN code" class="form-input" required />
      </div>
      <input type="number" id="phone" class="form-input full-width" name="" placeholder="Phone" required />
      <div class="form-row">
        <input type="checkbox" id="declaration" name="" />
        <label for="">Save this information for next time</label>
      </div>
      <div class="btn-part">
        <button type="button" class="return-btn">❮ Return to cart</button>
        <button type="submit" class="Continue-btn" onClick={handlePayment} ><Link to={"/"}>Continue to Payment</Link> </button>
      </div>
      <footer>
        <hr />
        <ul className='flexul'>
          <li>Refund policy</li>
          <li>Shipping policy</li>
          <li>Privacy policy</li>
          <li>Terms of service</li>
        </ul>
      </footer>
    </form>
  </div>

</div>

    </div>
  )
}

export default Payment