import React from 'react'

const TodoList = ({todos, setTodos}) => {
  return (
    <div>
        {todos.map((todo) => (
            <li className='todo-list' key={todo.id}>
                <input type="text" value={todo.title} className='list'/>
            </li>
        ))}
    </div>
  )
}

export default TodoList
