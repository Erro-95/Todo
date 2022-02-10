import { useState, useEffect, useContext } from 'react';
import { TodosContext } from '.';
import useSortReducer  from '../utils/useSortReducer'

import truncate from '../utils/truncate'
import { ITodo } from './interfaces';

interface Props {
    openModal(formType : boolean, todo : ITodo): void;
}

const sortIcon = (sortType : string, type : string) => {
    return sortType === type ? "fad fa-sort-down" : sortType === `${type}2` ? "fad fa-sort-up" : "fal fa-sort"
}

const TodosList = ({ openModal }: Props) => {
    const {todos, setTodos} = useContext<any>(TodosContext)
    const [sortType, dispatch] = useSortReducer()
    const [todosCopy, setTodosCopy] = useState<ITodo[] | []>([])

    useEffect((): void => {
        setTodosCopy(todos)
    }, [todos])

    const deleteTask = (currTodo: ITodo) => {
        setTodos(todos.filter((todo: { taskDateCreation: number; }) => todo.taskDateCreation !== currTodo.taskDateCreation))
    }

    return <div className="todos-list">
        <table className='todos-table'>
            <thead>
            <tr>
                <th className='task-name-cell'><span onClick={() => dispatch({ type: 'title'}, todosCopy, setTodosCopy)}>Task Name <i className={sortIcon(sortType, 'title')} /></span></th>
                <th className='description-cell'><span>Description</span></th>
                <th className='priority-cell'><span onClick={() => dispatch({ type: 'priority'}, todosCopy, setTodosCopy)}>Priority <i className={sortIcon(sortType, 'priority')} /></span></th>
                <th className='status-cell'><span onClick={() => dispatch({ type: 'status'}, todosCopy, setTodosCopy)}>Status <i className={sortIcon(sortType, 'status')} /></span></th>
            </tr>
            </thead>
            <tbody>
                {todosCopy.map((todo: ITodo, indx: number) => {
                    return (
                    <tr key={indx}>
                    <td className='task-name-cell' >{truncate(todo.taskName, 15)}</td>
                    <td className='description-cell' >{truncate(todo.taskDescription, 130)}</td>
                    <td className='priority-cell' >{todo.priority}</td>
                    <td className='status-cell' >{todo.status}</td>
                    <td><i className="fas fa-edit" onClick={() => openModal(true, todo)} /></td>
                    <td><i className="fas fa-trash-alt" onClick={() => deleteTask(todo)} /></td>
                </tr>
                )})}
            </tbody>
        </table>
    </div>
}

export default TodosList;