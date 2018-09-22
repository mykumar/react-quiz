import React from "react";
import Buttons from "./Buttons";
import bettyIcon from "../assets/Payroll_Betty_icon.png";

export default class PageFooter extends React.Component {
  render() {
    return this.props.onlyButtons ? (
      <div>
        <div className="footer-button-container" style={{ padding: "0px 40%" }}>
          <Buttons {...this.props} />
        </div>
      </div>
    ) : (
      <div className="button-group" onClick={() => {}}>
        <div className="row m-0">
          <div className="col-lg-8">
            <div className="row footer-Icon">
              <div className="col-lg-1" style={{ padding: "0px" }}>
                <img alt="icon" src={bettyIcon} width="55" height="55" />
              </div>
              <div className="col-lg-8" style={{ padding: "0px" }}>
                <div>...</div>
                <div className="footer-text">{this.props.desc}</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer-button-container">
              <Buttons {...this.props} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
