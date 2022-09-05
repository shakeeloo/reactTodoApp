import React from 'react';
import TodoItem from './TodoItem'

const TodoList = (props) => {
    const del = (title) =>{
        props.del(title)
    }
    return (
        <ul className="list-group mb-5" style={{width: "40%", margin: "0px auto",listStyle:'none'}}>
            {
                props.todos.length>0?props.todos.map((item,i)=>{
                    return <TodoItem key={i} index={i} title={item.todoTitle} detail={item.todoDetail} del={del}/>
                }):<li style={{padding: "10px",backgroundColor:'rgb(52, 58, 64)',color:'white' }}>Nothing In Array</li>
            }
        </ul>
    );
}

export default TodoList;
