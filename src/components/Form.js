import React,{useState} from 'react';

const Form = (props) => {
    const [formTodo, setFormData] = useState({
        todoTitle:'',
        todoDetail:''
    })
    const {todoTitle,todoDetail} = formTodo
    const handleChange = (e) =>{
        setFormData( {...formTodo,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        props.addTodo(formTodo)
        setFormData({
            todoTitle:'',
            todoDetail:''
        })
    }
    return (
        <div style={{width:'40%',margin:'0 auto',padding:'50px 0'}}>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Todo Title</label>
                    <input type="text" className="form-control" name='todoTitle' value={todoTitle} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Todo Discription</label>
                    <input type="text" className="form-control" name='todoDetail' value={todoDetail} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Add Todo</button>
            </form>
        </div>
    );
}

export default Form;

