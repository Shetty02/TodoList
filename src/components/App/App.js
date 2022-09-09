import React from 'react';
import List from '../Util/List';


const bodyContainer = {
  display:'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#282c34',
}

const todoListContainer ={
  display: 'flex',
  justifyContent:'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: 'aqua',
  borderRadius: '10px',
  width:'600px',
  boxShadow: '0 0 10px 0 rgba(255,255,255,.5)' ,

 }

 const todos = [
  {
    id:1,
    text:'Learn React',
    isCompeleted:'False'
 
  },
  {
    id:2,
    text:'Learn Nodejs',
    isCompeleted:'False'
  },
  {
    id:3,
    text:'Learn MongoDB',
    isCompeleted:'False'
  },
  {
    id:4,
    text:'Learn Angular',
    isCompeleted:'False'
  },
]
function App() {  
  return (
    <div style={bodyContainer}>
      <div style={todoListContainer}>
        <h1>Accio ToDo</h1>
        <List todoe={todos}/>
      </div>
    </div>
  );
}

export default App;
