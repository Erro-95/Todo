import { useState, useContext, FormEvent, ChangeEvent } from "react"
import { TodosContext } from '.'

interface Props {
    closeModal() : void
    taskName? : string;
    taskDescription? : string;
    priority? : string;
    status? : string;
    taskDateCreation? : number;
    updateForm? : boolean
}

const ModalForm = ({ closeModal, taskName = '', taskDescription = '', priority = 'Low' , status = 'Pending', taskDateCreation, updateForm = false }: Props) : JSX.Element => {
    const defaultValue = { taskName, taskDescription, priority , status, taskDateCreation}

    const {todos, setTodos} = useContext<any>(TodosContext);
    const [formData, setFormData] = useState({...defaultValue});

    const onChangeHandler = (evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement> ): void => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        });
    }
    
    const submitTodo = (evt: FormEvent<HTMLFormElement>) : void => {
        evt.preventDefault();
        
        const newTodo = formData;

        if (updateForm) {
            newTodo.taskDateCreation = taskDateCreation
            setTodos(todos.map((todo: { taskDateCreation: number | undefined }) => todo.taskDateCreation === taskDateCreation ? newTodo : todo ));
        }
        else {
            newTodo.taskDateCreation = Date.now()
            setTodos([...todos, newTodo]);
            setFormData({...defaultValue});
        }
    }

    return <div className='add-todo-form'>
        <form onSubmit={submitTodo}>
            <input type="text" onChange={onChangeHandler} name='taskName' value={formData.taskName} placeholder="TaskName" required />
            <textarea rows={20} onChange={onChangeHandler} name='taskDescription' value={formData.taskDescription} placeholder="Description" />
            <select onChange={onChangeHandler} placeholder="Priority" name='priority' value={formData.priority} >
                <option value='Low'>Low</option>
                <option value='Medium'>Medium</option>
                <option value='High'>High</option>
            </select>
            <select onChange={onChangeHandler} placeholder="Status" name='status' value={formData.status}>
                <option value='Pending'>Pending</option>
                <option value='In Progress'>In Progress</option>
                <option value='Completed'>Completed</option>
            </select>
            <button onClick={() => closeModal}>Cancel</button>
            <input type="submit" />
        </form>
    </div>
}

export default ModalForm;