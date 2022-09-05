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
  const [mode, setMode] = useState(false)

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

  const handleToggle = () =>{
    if(mode){
      document.body.style.backgroundColor='white'
    }else{
      document.body.style.backgroundColor='#a8a8a8'
    }
    
    setMode(!mode)
  }

  return <div>
            <Header mode={mode} toggle={handleToggle}/>
            <Form addTodo={submitTodo}/>
            <TodoList todos={todos} del={del}/>
            <Footer/>
          </div>
}

export default App;
