import {useState} from 'react';

const initialState: string = ''

const reducer = (currState: string, action, todos, setTodos) => {
    if (action.type === currState) {
        setTodos([...todos].reverse())
        return action.type + 2
    }
    else{
        todos.sort((a: { taskDateCreation: number; }, b: { taskDateCreation: number; }) => a.taskDateCreation - b.taskDateCreation)

        switch(action.type){
            case 'title':
            setTodos(todos.sort((a: { taskName: string; }, b: { taskName: any; }) => a.taskName.localeCompare(b.taskName)))
            break;
        case 'priority':
            const priorityQueue:  = ['Low', 'Medium', 'High'];
            setTodos(todos.sort((a: { taskDateCreation: number; }, b: { taskDateCreation: number; }) => a.taskDateCreation - b.taskDateCreation).sort((a, b) => priorityQueue.indexOf(a.priority) - priorityQueue.indexOf(b.priority)))
            break;
        case 'status':
            const statusQueue:  = ['Pending', 'In Progress', 'Completed']
            setTodos(todos.sort((a: { taskDateCreation: number; }, b: { taskDateCreation: number; }) => a.taskDateCreation - b.taskDateCreation).sort((a, b) => statusQueue.indexOf(a.status) - statusQueue.indexOf(b.status)))
            break;
        default:
            return currState; 
        }
    
    return action.type
    }
}

const useSortReducer = () => {
    const [sortType, setSortType] = useState(initialState);

    const dispatch = (action: any, todos: any, setTodos: any) => {
        const newSortType = reducer(sortType, action, todos, setTodos);

        setSortType(newSortType);
    }

    return [ sortType,  dispatch ];
}


export default useSortReducer;