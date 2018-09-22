import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Admin from "./assets/Payroll_Betty_icon.png";
import Quiz from "./assets/PaySchedules_icon.png";
import SetupOption from "./components/SetupOption";
import Tips from "./components/Tips";

class Home extends Component {
  render() {
    let setupArray = [
      { name: "Admin", image: Admin },
      { name: "Take Quiz", image: Quiz }
    ];
    return (
      <div className="main-container">
        <div
          className="row m-0 page-container"
          style={{ background: "#fafafa" }}
        >
          <div className="col-lg-8 home-description">
            <div style={{ width: "73%" }}>
              <div style={{ fontSize: "40px", marginBottom: "10px" }}>
                Up,Up, and Away!
              </div>
              This is a Sample React Quiz
            </div>
            <div className="home-setup row">
              {setupArray.map(k => {
                return <SetupOption key={k.name} data={k} {...this.props} />;
              })}
            </div>
          </div>
          <div className="col-lg-3" style={{ marginLeft: "40px" }}>
            <Tips />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
