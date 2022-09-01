import React from "react";
import './styles.css'

const TodoItem = (props) => {
  const handleDelete = (title) =>{
    console.log(title,"item title")
    //  return title
  }
  return (
    <li
      style={{padding: "10px" }}
      className="border d-flex justify-content-between align-items-center mb-4"
    >
      <div>
  <h6>{props.index+1}- {props.title}</h6>
        <span style={{ color: "gray" }}>{props.detail}</span>
      </div>

      <button type="button" className="close" onClick={()=>props.del(props.title)}>
        <span>&times;</span>
      </button>
    </li>
  );
};

export default TodoItem;
