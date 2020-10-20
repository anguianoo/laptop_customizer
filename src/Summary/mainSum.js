import React, { Component } from "react";
import "../App.css";
import Total from "./Total";

class MainSum extends Component {
  render() {
    const summary = Object.keys(this.props.state.selected).map(
      (feature, idx) => {
        const featureHash = feature + "-" + idx;
        const selectedOption = this.props.state.selected[feature];

        return (
          <Total
            key={featureHash}
            feature={feature}
            name={selectedOption.name}
            cost={this.props.currencyFormatter.format(selectedOption.cost)}
          />
        );
      }
    );

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
            {this.props.total} {/* <Total /> */}
          </div>
        </div>
      </section>
    );
  }
}

export default MainSum;
