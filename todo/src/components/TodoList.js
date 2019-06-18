import React from "react";
import uuid from "uuid/v1";
import * as actionCreators from "../store/actions/actionTypes";
import { connect } from "react-redux";
const todoList = props => {
  const styles = {
    textDecoration: "line-through"
  };

  return (
    <div>
      {props.todoArray.map(elem => (
        <p
          style={elem.completed ? styles : null}
          key={uuid()}
          onClick={() => props.onCompleteTodo(elem.id)}
        >
          {elem.value}
          <i className="fas fa-trash-alt " onClick={(event)=>props.onDeleteTodo(event,elem.id)}/>
        </p>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todoArray: state.todo
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onCompleteTodo: id => dispatch(actionCreators.completed(id)),
    onDeleteTodo: (event,id) => dispatch(actionCreators.deleted(event,id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(todoList);
