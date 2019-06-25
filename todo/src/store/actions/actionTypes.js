import uuid from "uuid/v1";

export const ADD_TODO = "ADD_TODO";
export const COMPLETED_TODO = "COMPLETED_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const add = (event) => {
    event.preventDefault();
    let newEntry = {
      value: event.target[0].value,
      completed: false,
      id: uuid()
    };
    event.target.reset();
  return {
    type: ADD_TODO,
    val: newEntry
  };
};
export const completed = (id) => {
  return {
    type: COMPLETED_TODO,
    val: id
  };
};

export const deleted = (event,id) => {
    event.stopPropagation();
    return {
      type: DELETE_TODO,
      val: id
    };
  };
