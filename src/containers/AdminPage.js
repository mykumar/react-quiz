import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getAndSetValues } from "../actions";
import { accural } from "./Constants";
import _ from "underscore";
import AddForm from "../components/AddForm";

class AdminPage extends Component {
  state = {
    questions: [],
    modalIsOpen: false,
    editData: {},
    dataKey: null,
    edit: false
  };

  componentWillMount() {
    this.setState({
      questions: this.props.data.questions
    });
  }

  componentWillReceiveProps(props) {
    this.setState({
      questions: props.data.questions
    });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  openAddModal = () => {
    this.setState({
      modalIsOpen: true,
      dataKey: null,
      editData: {},
      edit: false
    });
  };
  openModal = (data, key) => {
    this.setState({
      modalIsOpen: true,
      editData: data,
      dataKey: key,
      edit: true
    });
  };

  handleSubmit = (data, key) => {
    let originalData = this.props.data.questions;
    let arr = originalData;
    let newData = {
      title: data.Title,
      options: []
    };
    Object.keys(data).map(k => {
      if (k !== "Title") {
        if (data[k] !== "") {
          newData.options.push(data[k]);
        }
      }
    });
    if (this.state.edit) {
      arr[key] = newData;
    } else {
      arr.push(newData);
    }
    this.props.getAndSetValues("questions", arr);
    this.setState({
      modalIsOpen: false
    });
  };

  handleRemove = key => {
    let originalData = this.props.data.questions;
    let arr = originalData;
    arr = arr.filter((d, i) => i !== key);

    this.props.getAndSetValues("questions", arr);
    this.setState({
      modalIsOpen: false
    });
  };

  render() {
    const { questions, modalIsOpen, editData, dataKey, edit } = this.state;
    return (
      <div>
        <AddForm
          dataKey={dataKey}
          data={editData}
          edit={edit}
          open={modalIsOpen}
          handleClose={this.closeModal}
          handleSubmit={this.handleSubmit}
          handleRemove={this.handleRemove}
        />
        <div
          style={{
            paddingLeft: "70px",
            cursor: "pointer",
            background: "#ffffff"
          }}
          onClick={() => {
            this.props.history.push("/");
          }}
        >
          <i className="fa fa-chevron-left" style={{ marginRight: "10px" }} />Dashboard
        </div>
        <div
          style={{
            padding: "20px 0 0 90px",
            cursor: "pointer",
            background: "#ffffff"
          }}
        >
          <button
            className="footer-buttons primary-button"
            type="button"
            onClick={this.openAddModal}
            style={{ textAlign: "center" }}
          >
            ADD QUESTIONS
          </button>
          <button
            className="footer-buttons secondary-button"
            type="button"
            onClick={() => {
              this.props.history.push("/quiz");
            }}
            style={{ textAlign: "center" }}
          >
            TAKE QUIZ
          </button>
        </div>
        <div className="row m-0 page-container main-container">
          {questions.length > 0 &&
            questions.map((data, j) => (
              <div
                className="col-md-5 card"
                key={j}
                onClick={() => {
                  this.openModal(data, j);
                }}
              >
                <div>Ques: {data.title}</div>
                {data.options.map((l, i) => <li key={i}>{l}</li>)}
              </div>
            ))}
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

export default withRouter(connect(stateToProps, actionCreators)(AdminPage));
