import React, { useContext, useReducer } from "react";
import { newTask, openForm, deleteTask, completeTask } from "../actions/TodoActions";
import TodoReducer from "../reducers/TodoReducer";

const AppContext = React.createContext();

const initialState = {
    tasks: [
        {
            id: 1,
            title: "Test task1",
            description: "Test task1 description",
            completed: false,
        },
        {
            id: 2,
            title: "Test task2",
            description: "Test task2 description",
            completed: false,
        },
        {
            id: 3,
            title: "Test task3",
            description: "Test task3 description",
            completed: false,
        }
    ],
    isOpen: false,
    showCompleted: false
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TodoReducer, initialState);

    const addTask = (data) => {
        dispatch(newTask(data));
    };

    const handleForm = (formStatus) => {
        dispatch(openForm(formStatus));
    };

    const removeTask = (id) => {
        dispatch(deleteTask(id));
    };

    const markTaskCompleted = (id) => {
        dispatch(completeTask(id));
    };

    const toggleShowCompleted = () => {
        dispatch({ type: 'Toggle show completed' });
    };

    return (
        <AppContext.Provider value={{
            ...state,
            addTask,
            handleForm,
            removeTask,
            markTaskCompleted,
            toggleShowCompleted
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
