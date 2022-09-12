import React, {useState} from 'react'
import ListItems from './ListItems'
import'./List.css'


function List(props) {



 // ALL To Do List
  const[todos,setTodos] = useState([
    // {
    //   id:1,
    //   text:'Learn React',
    //   isCompeleted:'False'
   
    // },
    // {
    //   id:2,
    //   text:'Learn Nodejs',
    //   isCompeleted:'False'
    // },
    // {
    //   id:3,
    //   text:'Learn MongoDB',
    //   isCompeleted:'False'
    // },
    // {
    //   id:4,
    //   text:'Learn Angular',
    //   isCompeleted:'False'
    // },
  ])

  const[todoInput,setTodoInput] = useState('');

  const handleInput = (e) => {
    setTodoInput(e.target.value);
  }

  const handleSubmit = (e) =>{
    setTodos([...todos,
    {
      id:todos.length + 1,
      text: todoInput,
      isCompeleted:false
    }]);

    setTodoInput('');
  }
  return (
    <div className='list-container'>


       {/* TODO Form */}
       <input type='text' placeholder='Add a todo'  onChange={handleInput} value={todoInput}/>
        <button onClick={handleSubmit}>Add Todo</button>


      {/* Rendering the List */}
      {todos.map((todo) => (
        <ListItems texts ={todo.text}/>
      ))}


      {/* Generally we can access this way the value of our component inside the array but in Big websites like amazon, flipkart etc. at there a lot of components are there so we cann't access those like this for that we have to use map method.thus, that's why we are using he map method */}
      {/* <ListItems text = {todos[0].text} />
      <ListItems text = {todos[1].text} />
      <ListItems text = {todos[2].text} />
      <ListItems text = {todos[3].text} /> */}
    </div>
  )
}

export default List