import logo from './logo.svg';
import Header from './components/Header'
import Footer from './components/Footer'
import Form from './components/Form'
import TodoList from './components/TodoList'
import {useState} from 'react'
import './App.css';

function App() {
  const [todos, setTodos] = useState([{todoTitle:"React Task",todoDetail:"Create a Todo App having different components"},
  {todoTitle:"React Hook",todoDetail:"Understands Hooks"}])

  const submitTodo = (todo) =>{
      setTodos([...todos,todo])
  }

  const del = (title) =>{
    setTodos(todos.filter((item)=>{
      return item.todoTitle !== title
    }))
  } 

  return <div>
    <Header/>
    <Form addTodo={submitTodo}/>
    <TodoList todos={todos} del={del}/>
    <Footer/>
  </div>
}

export default App;
