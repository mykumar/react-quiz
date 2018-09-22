import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PageFooter from "../generic/PageFooter";
import Success from "../assets/Succes_icon.png";

class CompletePage extends Component {
  render() {
    return (
      <div>
        <div className="row m-0 page-container main-container">
          <div className="page-content">
            <p
              style={{
                fontSize: "50px",
                padding: "15px 0px",
                textAlign: "center"
              }}
            >
              Quiz Complete
            </p>
            <div style={{ padding: "0px", textAlign: "center" }}>
              <img alt="icon" src={Success} width="255" height="255" />
            </div>
          </div>
        </div>
        <div className="page-footer-container">
          <PageFooter
            onBack={() => {
              this.props.history.push("/quiz");
            }}
            onContinue={() => {
              this.props.history.push("/");
            }}
            onlyButtons
          />
        </div>
      </div>
    );
  }
}

export default withRouter(CompletePage);
