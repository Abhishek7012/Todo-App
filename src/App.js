import React, { useState } from 'react'
import Todoform from './Component/Todoform'
import "./App.css"
import Todolist from './Component/Todolist'

const App = () => {
 const [todo, setTodo]= useState("")
 const [todos, setTodos]= useState([])
 const [editId, setEditId]= useState(0)
const [editedTodo,setEditedTodo] = useState("")

 const handleSubmit = (e) =>{
      e.preventDefault();
      
      setTodos([{id:`${todo}-${Date.now()}`, todo}, ...todos])
      setTodo("")

 }

const handleEditedTodo = (e) => {
  e.preventDefault();
  const s = todos.find(item => item.id === editId)
  s.todo = editedTodo
  setEditedTodo("")
  setEditId("")
}

  const handleDelete = (id)=>{
    alert('deleting todo of id :   ' + id)
    const deletetodo = todos.filter((to) => to.id !==id);
    setTodos([...deletetodo])
  }


  const handleEdit = (data)=>{
    setEditId(data.id);
    setEditedTodo(data.todo)
  }


  return (
    <div className='App'>
      <div className='container'>
      <Todoform
      todo={todo}
      editId={editId}
      handleSubmit={handleSubmit}
      setTodo={setTodo}
      />
      <Todolist
      editId={editId}
      editedTodo={editedTodo}
      todos={todos}
      handleEdit= {handleEdit}
      setEditedTodo={setEditedTodo}
      handleEditedTodo={handleEditedTodo}
      handleDelete={handleDelete}
      />

      </div>
    </div>
  )
}

export default App
