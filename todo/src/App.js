import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import uuid from "uuid/v1";
class App extends Component {
  state = {
    todo: [
      {
        value: "Walk the dog.",
        completed: false,
        id: 1
      }
    ]
  };
  editFormHandler = event => {
    event.preventDefault();
    let newEntry = {
      value: event.target[0].value,
      completed: false,
      id: uuid()
    };
    event.target.reset();
    this.setState(prevState => ({
      todo: [...prevState.todo, newEntry]
    }));
  };
  completedHandler = id => {
    this.setState(prevState => ({
      todo: prevState.todo.map(elem => {
        if (elem.id === id) {
          elem.completed = !elem.completed;
        }
        return elem
      })
    }));
  };
  render() {
    return (
      <div className="App">
        <div>
          <TodoList data={this.state.todo} completed={this.completedHandler} />
        </div>
        <div>
          <form action="" onSubmit={this.editFormHandler}>
            <input type="text" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
