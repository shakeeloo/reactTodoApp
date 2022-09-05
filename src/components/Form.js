import React,{useState} from 'react';

const Form = (props) => {
    const [formTodo, setFormData] = useState({
        todoTitle:'',
        todoDetail:''
    })
    const [err, setErr] = useState('')
    const {todoTitle,todoDetail} = formTodo
    const handleChange = (e) =>{
        setFormData( {...formTodo,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(todoTitle==='' && todoDetail===''){
            return <li style={{padding: "10px",backgroundColor:'rgb(52, 58, 64)',color:'white' }}>{setErr('Please Fill All The fields')}</li>
        }
        props.addTodo(formTodo)
        localStorage.setItem(todoTitle, JSON.stringify(todoDetail))
        setFormData({
            todoTitle:'',
            todoDetail:''
        })
    }
    const renderElements = () =>{
        if(err===''){
           return null
        }else{
           return <li style={{padding: "10px",backgroundColor:'rgb(52, 58, 64)',color:'white' }}>{err}</li>
        }
        }
    return (
        <div style={{width:'40%',margin:'0 auto',padding:'40px 0 10px'}}>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Todo Title</label>
                    <input type="text" className="form-control" name='todoTitle' value={todoTitle} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Todo Discription</label>
                    <input type="text" className="form-control" name='todoDetail' value={todoDetail} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary mb-3">Add Todo</button>
            </form>  
            {renderElements()}        
        </div>
    );
}

export default Form;

