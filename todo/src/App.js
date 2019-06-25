import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions/actionTypes";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <TodoList />
        </div>
        <div>
          <form action="" onSubmit={this.props.onAddTodo}>
            <input type="text" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    todoArray: state.todo
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onAddTodo: event => dispatch(actionCreators.add(event))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
