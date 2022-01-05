import { useContext } from 'react';
import { TodosContext } from '.';

import Styles from './modules/TodoList.module.css'

import truncate from '../utils/truncate'

const TodosList = ({ openModal }) => {
    const [todos, setTodos] = useContext(TodosContext)

    const deleteTask = (currTodo) => {
        setTodos(todos.filter(todo => todo.taskDateCreation !== currTodo.taskDateCreation))
    }

    return <div className="todos-list">
        <table className='todos-table'>
            <thead>
            <tr>
                <th>Task Name</th>
                <th>Description</th>
                <th>Priority</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
                {todos.map((todo, indx) => {
                    return (
                    <tr key={indx}>
                    <td><a href='/' onClick={(e) => {openModal(e, true, todo)}} >{truncate(todo.taskName, 15)}</a></td>
                    <td>{truncate(todo.taskDescription, 130)}</td>
                    <td>{todo.priority}</td>
                    <td>{todo.status}</td>
                    <td><i className="fas fa-edit" onClick={(e) => openModal(e, true, todo)} /></td>
                    <td><i className="fas fa-trash-alt" onClick={() => deleteTask(todo)} /></td>
                </tr>
                )})}
            </tbody>
        </table>
    </div>
}

export default TodosList;