import { ITodo } from "./interfaces";

interface Props {
    openModal(formType? : boolean, todo? : ITodo ): void
}

const AddTodoButton = ({openModal} : Props) => {

    return (
    <div className='add-todo-btn'>
        <button className='button' onClick={() => openModal()}> Add New Task </button>
    </div>
    )
}

export default AddTodoButton;