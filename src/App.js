import { useState } from 'react'
import { AddTodoButton, TodosContextProvider, Modal, TodosList, ModalForm } from "./components";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [updateForm, setUpdateForm] = useState(false);
  const [todo, setTodo] = useState({})

  const openModal = (evt, formType = false, todo) => {
     if (formType) { 
      evt.preventDefault();
      setTodo(todo)
    }
      setModalOpen(true);
      setUpdateForm(formType);
  }

  const closeModal = () => {
      setTodo({})
      setModalOpen(false);
  }

  return (
    <div className="App">
      <TodosContextProvider>
        <AddTodoButton openModal={openModal} />
        <Modal closeModal={closeModal} open={modalOpen}  >
          <ModalForm closeModal={closeModal} updateForm={updateForm} {...todo} />
        </Modal>
        <TodosList openModal={openModal} setForm={setUpdateForm} />
      </TodosContextProvider>
    </div>
  );
}

export default App;
