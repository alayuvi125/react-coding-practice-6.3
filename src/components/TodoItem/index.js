// Write your code here

import './index.css'

const TodoItem = props => {
  const {todoList, onDeleteTodo} = props
  const {id, title} = todoList

  const onDelete = () => {
    onDeleteTodo(id)
  }

  return (
    <li className="todo-container">
      <p className="todo">{title}</p>
      <div>
        <button className="button" type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
