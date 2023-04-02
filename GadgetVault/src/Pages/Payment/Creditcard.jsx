import React, { Component } from "react";
// import swal from "sweetalert";
import "./Creditcard.css"

export class Credicard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: "",
      cardHolder: "",
      month: "month",
      year: "year",
      cvv: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    alert("Payment Successful..!");
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  }

  render() {
    return (
      <div className="container">
        <div className="card-container">
          <div className="front">
            <div className="image">
              <img src="image/chip.png" alt="" />
              <img src="image/visa.png" alt="" />
            </div>
            <div className="card-number-box">
              {this.state.cardNumber}
            </div>
            <div className="flexbox">
              <div className="box">
                <span>card holder</span>
                <div className="card-holder-name">
                  {this.state.cardHolder}
                </div>
              </div>
              <div className="box">
                <span>expires</span>
                <div className="expiration">
                  <span className="exp-month">{this.state.month}</span>
                  <span className="exp-year">{this.state.year}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="back">
            <div className="stripe"></div>
            <div className="box">
              <span>cvv</span>
              <div className="cvv-box">{this.state.cvv}</div>
              <img src="image/visa.png" alt="" />
            </div>
          </div>
        </div>

        <form id="form" onSubmit={this.handleSubmit}>
          <div className="inputBox">
            <span>card number</span>
            <input
              type="text"
              maxlength="16"
              name="cardNumber"
              className="card-number-input"
              required
              onChange={this.handleChange}
            />
          </div>
          <div className="inputBox">
            <span>card holder</span>
            <input
              type="text"
              name="cardHolder"
              className="card-holder-input"
              required
              onChange={this.handleChange}
            />
          </div>
          <div className="flexbox">
            <div className="inputBox">
              <span>expiration mm</span>
              <select
                name="month"
                className="month-input"
                onChange={this.handleChange}
              >
                <option value="month" selected disabled>
                  month
                </option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>
            <div className="inputBox">
              <span>expiration yy</span>
              <select
                name="year"
                className="year-input"
                onChange={this.handleChange}
              >
                <option value="year" selected disabled>
                  year
                </option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
              </select>
            </div>
            <div className="inputBox">
              <span>cvv</span>
              <input
                type="password"
                maxlength="4"
                name="cvv"
                className="cvv-input"
                required
                onChange={this.handleChange}
              />
            </div>
          </div>
          <input
            id="submit"
            type="submit"
            value="submit"
            className="submit-btn"
          />
        </form>
      </div>
    );
  }
}

export default Credicard;