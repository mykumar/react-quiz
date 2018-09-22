import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getAndSetValues } from "../actions";
import MultipleCheckButtons from "../generic/MultipleCheckButtons";
import PageFooter from "../generic/PageFooter";
import { baseEarning, footerDescription } from "./Constants";
import _ from "underscore";

class QuizPage extends Component {
  state = {
    answers: {},
    other: false,
    current: 0,
    quizQuestions: []
  };
  componentWillMount() {
    if (this.props.data.answers) {
      this.setState({
        answers: this.props.data.answers
      });
    }
    this.setState({
      quizQuestions: this.props.data.questions
    });
  }
  componentWillReceiveProps() {
    console.log(this.props);
    this.setState({
      quizQuestions: this.props.data.questions
    });
  }

  handleOnChange(value, i) {
    let current = this.state.current;
    let answers = this.state.answers;
    answers[current] = value;
    this.setState({ answers });
  }
  render() {
    const { current, quizQuestions } = this.state;
    return (
      <div>
        <div className="row m-0 page-container main-container">
          <div className="page-content">
            <p style={{ fontSize: "18px" }}>
              Question <span>{current + 1}</span> of{" "}
              <span>{quizQuestions.length}</span>
            </p>
            <h3>{quizQuestions[current].title} </h3>
            <div className="row check-buttons-continers">
              {quizQuestions[this.state.current].options.map((k, i) => {
                return (
                  <MultipleCheckButtons
                    checked={
                      this.state.answers[this.state.current] &&
                      this.state.answers[this.state.current] === k
                    }
                    key={i}
                    name={k}
                    onSelect={k => {
                      this.handleOnChange(k);
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="page-footer-container">
          <PageFooter
            onBack={() => {
              if (current > 0) {
                this.setState({
                  current: current - 1
                });
              }
            }}
            onContinue={() => {
              if (current < quizQuestions.length - 1) {
                this.setState({
                  current: current + 1
                });
              } else {
                console.log(this.state);
                this.props.getAndSetValues("answers", this.state.answers);
                this.props.history.push("/complete");
              }
            }}
            desc={footerDescription}
          />
        </div>
      </div>
    );
  }
}
const stateToProps = state => {
  return {
    data: state.quizData
  };
};
const actionCreators = {
  getAndSetValues: getAndSetValues
};

export default withRouter(connect(stateToProps, actionCreators)(QuizPage));
