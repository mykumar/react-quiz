import React from "react";
import multiSelectArrow from "../assets/multi_select_arrow.png";

export default class MultiSelectButtons extends React.Component {
  render() {
    return !this.props.checked ? (
      <div
        className="check-buttons col-lg-3"
        onClick={() => {
          this.props.onSelect(this.props.name);
        }}
      >
        <div className="uncheck-multiCheck-image-container">
          <div className="uncheck-multiCheck-image" style={this.props.style} />
          <div style={{ marginTop: "15px" }}>{this.props.name}</div>
        </div>
      </div>
    ) : (
      <div
        className="check-buttons col-lg-3"
        onClick={() => {
          this.props.onSelect(this.props.name);
        }}
      >
        <div className="multiCheck-image-container">
          <div className="multiCheck-image">
            <img alt="icon" src={multiSelectArrow} width="40" height="40" />
          </div>
          <div style={{ marginTop: "15px" }}>{this.props.name}</div>
        </div>
      </div>
    );
  }
}
