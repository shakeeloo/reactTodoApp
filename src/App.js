import logo from './logo.svg';
import Header from './components/Header'
import Footer from './components/Footer'
import Form from './components/Form'
import TodoList from './components/TodoList'
import {useState,useEffect} from 'react'
import './App.css';

const getItemsFromLS = () =>{
  const todos =  localStorage.getItem('todos')

  if(todos){
    return JSON.parse(localStorage.getItem('todos'))
  }else{
    return null
  }

}


function App() {
  const [todos, setTodos] = useState(getItemsFromLS())

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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
