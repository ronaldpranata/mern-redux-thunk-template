/* eslint-disable no-undef */
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import actions from "../../actions";
import "whatwg-fetch";

class Home extends Component {
  constructor(props) {
    super(props);
    this.actions=this.props.actions;
    this.state = {
      counters: []
    };

    this.newCounter = this.newCounter.bind(this);
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
    this.deleteCounter = this.deleteCounter.bind(this);
  }

  componentDidMount() {
    this.actions.fetchData();
  }

  newCounter() {
    this.actions.addCounter();
  }

  incrementCounter(id) {
    this.actions.increaseCounter(id);
  }

  decrementCounter(id) {
    this.actions.decreaseCounter(id);
  }

  deleteCounter(id) {
    this.actions.removeCounter(id);
  }


  render() {
    let counters =this.props.counter ? this.props.counter.counter : [];
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col"></div>
            <div className="col-md-4 card p-0">
              <div className="card-body">
                <h5 className="card-title font-weight-bold">Counters</h5>
                <ul>
                  {counters.map((counter, i) => (
                    <li className="list-unstyled" key={i}>
                      <span className="pr-3 h5">{counter.count} </span>
                      <button className="btn btn-primary m-1" onClick={() => this.incrementCounter(counter._id)}>+</button>
                      <button className="btn btn-primary m-1" onClick={() => this.decrementCounter(counter._id)}>-</button>
                      <button className="btn btn-danger m-1" onClick={() => this.deleteCounter(counter._id)}>x</button>
                    </li>
                  ))}
                </ul>

                <button className="btn btn-primary m-1" onClick={this.newCounter}>New counter</button>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>

      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

