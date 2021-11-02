import React from "react";

const TodoLists=(props)=>{

    return(
        <>
        <div className="todo_style">
        <li> {props.text}</li>
        <button className="delete_button" 
        onClick={()=>{
            props.onSelect(props.id)
        }}>Delete</button>
        </div>
        </>
    );

};

export default TodoLists;