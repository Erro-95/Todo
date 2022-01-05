import { createContext, useState, useEffect } from "react";
import { fetchLocalStorage, setToLocalStorage } from '../utils/localStorage';

export const TodosContext = createContext([]);

const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchLocalStorage(setTodos)
  }, []);

  useEffect(() => {
    setToLocalStorage(todos)
  }, [todos])

  return (
    <TodosContext.Provider value={[todos, setTodos]}>
      {children}
    </TodosContext.Provider>
  );
};


export default TodosProvider;