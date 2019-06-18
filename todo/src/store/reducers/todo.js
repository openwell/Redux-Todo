import * as actionTypes from "../actions/actionTypes";

const initialState = {
  todo: [
    {
      value: "Walk the dog.",
      completed: false,
      id: 1
    }
  ]
};
const todo = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return { ...state, todo: [...state.todo, action.val] };
    case actionTypes.COMPLETED_TODO:
      return {
        ...state,
        todo: state.todo.map(elem => {
          if (elem.id === action.val) {
            elem.completed = !elem.completed;
          }
          return elem;
        })
      };
    case actionTypes.DELETE_TODO:
      return {
        ...state,
        todo: state.todo.filter(elem => (elem.id !== action.val))
      };

    default:
      return state;
  }
};

export default todo;
