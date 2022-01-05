import { useState, useContext } from "react"
import { TodosContext } from '.'

const ModalForm = ({ closeModal, taskName = '', taskDescription = '', priority = 'Low' , status = 'Pending', taskDateCreation, updateForm = false }) => {
    const defaultValue = { taskName, taskDescription, priority , status}

    const [todos, setTodos] = useContext(TodosContext);
    const [formData, setFormData] = useState({...defaultValue});

    const onChangeHandler = (evt) => {
        formData[evt.target.dataset.input] = evt.target.value;
        setFormData({...formData});
    }
    
    const submitTodo = async (evt) => {
        evt.preventDefault();
        const newTodo = formData;
        if (updateForm) {
            setTodos(todos.map(todo => todo.taskDateCreation === taskDateCreation ? newTodo : todo ));
        }
        else {
            formData.taskDateCreation = Date.now();
            setTodos([...todos, newTodo]);
            setFormData({...defaultValue});
        }
    }

    return <div className='add-todo-form'>
        <form onSubmit={submitTodo}>
            <input type="text" onChange={onChangeHandler} data-input='taskName' value={formData.taskName} placeholder="TaskName" required />
            <textarea rows='20' onChange={onChangeHandler} data-input='taskDescription' value={formData.taskDescription} placeholder="Description" />
            <select onChange={onChangeHandler} placeholder="Priority" data-input='priority' value={formData.priority} >
                <option value='Low'>Low</option>
                <option value='Medium'>Medium</option>
                <option value='High'>High</option>
            </select>
            <select onChange={onChangeHandler} placeholder="Status" data-input='status' value={formData.status}>
                <option value='Pending'>Pending</option>
                <option value='In Progress'>In Progress</option>
                <option value='Completed'>Completed</option>
            </select>
            <button onClick={closeModal}>Cancel</button>
            <input type="submit" />
        </form>
    </div>
}

export default ModalForm;