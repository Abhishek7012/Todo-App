import React from 'react'

const Todolist = ({ todos, handleEdit, handleDelete,editId,setEditedTodo,editedTodo,handleEditedTodo }) => {


    return (
        <ul className='allTodos'>
            {todos.map((t) => (
                <li className='singleTodo'key={t.id} >
                    {t.id === editId ? (
                            <form className='todoform' onSubmit={handleEditedTodo}>
                                <input
                                onChange={(e)=>setEditedTodo(e.target.value)}
                                type="text"
                                value={editedTodo}
                                />                    
                            </form>
                          
                    ) : (

                    <span className='todoText' >
                        {t.todo}
                    </span>
                        )}
                    <button onClick={() => handleEdit(t)}>Edit</button>
                    <button onClick={() => handleDelete(t.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default Todolist
