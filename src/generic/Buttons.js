import React from "react";

export default class Buttons extends React.Component {
  render() {
    return (
      <div>
        <button
          className="footer-buttons secondary-button"
          type="button"
          onClick={this.props.onBack}
        >
          <i className="fa fa-chevron-left" style={{ marginRight: "10px" }} />
          Back
        </button>
        <button
          className="footer-buttons primary-button"
          type="button"
          onClick={this.props.onContinue}
        >
          Continue
        </button>
      </div>
    );
  }
}
