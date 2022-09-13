import React, {useState,useEffect} from 'react'
import ListItems from './ListItems'
import'./List.css'


const Local_Storage_Key = 'react-app-acciojob-todos';

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
        

        // here we are Retriving the data
        useEffect(()=> {
          const storedTodos  = JSON.parse(localStorage.getItem(Local_Storage_Key));
          if(storedTodos) setTodos(storedTodos);
        }, []);

//useEffect will be used whenever my todos get changed/updated we have to store it inside the local storage,so this will be done with the help of useEffect
        useEffect(()=>{
          if(todos.length > 0)      
          localStorage.setItem(Local_Storage_Key,JSON.stringify(todos));
        },[todos])
        

        //delete items in the List
        // Here what happening is that whenever the condition is satisfy the it will create a new array and stored it.i.e when both the id's are not same.And whenever the get the same we are going to deleteItem from the toDo list

        function deleteItem(id){
          setTodos(todos.filter(todo => todo.id !== id));
        }


        // Todo input
        const[todoInput,setTodoInput] = useState('');
        
        const handleInput = (e) => {
    setTodoInput(e.target.value);
  }

  const handleSubmit = (e) =>{
    //This wiil handel the cas when we have an empty todoInput it will not create a todoList
    if(todoInput == '') return;

    //Refer Notes why we use Math.Random
    setTodos([
    { id: Math.random() * 1000000,
      // id:todos.length + 1,
      text: todoInput,},
      ...todos
    ]);

    setTodoInput('');
  }
  return (
    <div className='list-container'>

      
       {/* TODO Form */}
       <div className='todo-input-form'>
       <input type='text' placeholder='Add a todo'  onChange={handleInput} value={todoInput}/>
        <button onClick={handleSubmit}>Add Todo</button>
       </div>


      {/* Rendering the List */}
      {todos.map((todo) => (
        <ListItems texts ={todo.text} id={todo.id} deleteItem ={deleteItem}/>
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