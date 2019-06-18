import React from "react";
import uuid from "uuid/v1";
const todoList = props => {
  const styles = {
    textDecoration: "line-through"
  };
  return (
    <div>
      {props.data.map(elem => (
        <p style={elem.completed ? styles : null} key={uuid()} onClick={()=>props.completed(elem.id)}>
          {elem.value}
        </p>
      ))}
    </div>
  );
};

export default todoList;
