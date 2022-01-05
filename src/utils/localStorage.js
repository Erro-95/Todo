export const fetchLocalStorage = async (setTodos) => {
  try {
    const todos = await JSON.parse(localStorage.getItem("todos"));
    if (todos.length) {
      setTodos(todos);
      console.log("Sucessfully fetched todos");
    }
  } catch (err) {
    console.info(err.message);
  }
};

export const setToLocalStorage = async (todos) => {
    try {
      await localStorage.setItem("todos", JSON.stringify(todos))

      console.log("successfully cached into local storage");
    } catch (err) {
      console.error(err.message);
    }
  
};
