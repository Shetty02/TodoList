import React from 'react'
import ListItems from './ListItems'
import'./List.css'


function List(props) {
  return (
    <div className='list-container'>
      {/* dynamic rendering  - data driven rendering */}
      {props.todoe.map((todo) => (
        <ListItems texts ={todo.text}/>
      ))}
      {/* <ListItems text = {todos[0].text} />
      <ListItems text = {todos[1].text} />
      <ListItems text = {todos[2].text} />
      <ListItems text = {todos[3].text} /> */}
    </div>
  )
}

export default List