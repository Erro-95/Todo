import { createContext, useState, useEffect, FC } from "react";
import { fetchLocalStorage, setToLocalStorage } from '../utils/localStorage';
import { ITodo } from './interfaces'


type TodosProviderProps = {
  children: JSX.Element | JSX.Element[]
}

interface todosContextData {
  todos: ITodo[];
  setTodos: (todos: ITodo[]) => void;
}

export const TodosContext = createContext<todosContextData | undefined>(undefined);

const TodosProvider: FC<TodosProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchLocalStorage(setTodos)
  }, []);

  useEffect(() => {
    setToLocalStorage(todos)
  }, [todos])

  return (
    <TodosContext.Provider value={{todos, setTodos}}>
      {children}
    </TodosContext.Provider>
  );
};


export default TodosProvider;