import React, { useState } from 'react'
import { AddTodoButton, TodosContextProvider, Modal, TodosList, ModalForm } from "./components";
import { ITodo } from "./components/interfaces"

function App(): JSX.Element {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [updateForm, setUpdateForm] = useState<boolean>(false);
  const [todo, setTodo] = useState<ITodo | {}>({})

  const openModal = (formType : boolean = false, todo : ITodo) : void => {
     if (formType) { 
      setTodo(todo)
    }
      setModalOpen(true);
      setUpdateForm(formType);
  }

  const closeModal = () : void => {
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
        <TodosList openModal={openModal} />
      </TodosContextProvider>
    </div>
  );
}

export default App;
