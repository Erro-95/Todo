const AddTodoButton = ({openModal}) => {
    return (
    <div className='add-todo-btn'>
        <button className='button' onClick={openModal}> Add New Task</button>
    </div>
    )
}

export default AddTodoButton;