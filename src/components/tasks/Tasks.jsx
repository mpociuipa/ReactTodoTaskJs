import React from "react";
import Task from "../task/Task";
import AddTask from "../addTask/AddTask";
import { useGlobalContext } from "../../context/TasksContext";

const Tasks = () => {
    const { tasks, isOpen, handleForm, showCompleted, toggleShowCompleted } = useGlobalContext();
  
    const filteredTasks = tasks.filter(task => showCompleted ? task.completed : !task.completed);

    return (
        <div className="container">
            <h2 className="m-5 text-center">Tasks list</h2>
            <div className="text-center m-5">
                {!isOpen && 
                    <button className="btn btn-primary mx-2" onClick={() => { handleForm(true) }}>Add task</button>}
                    <button className="btn btn-secondary" onClick={toggleShowCompleted}>
                        {showCompleted ? 'Rodyti neįvykdytas' : 'Rodyti įvykdytas'}
                    </button>
            </div>
            {isOpen ? (
                <AddTask />
            ) : (
                <ul className="list-group">
                    {filteredTasks.length > 0 ? filteredTasks.map((task, i) => (
                        <Task
                            key={i}
                            id={task.id}
                            title={task.title}
                            description={task.description}
                            completed={task.completed}
                        />
                    ))
                    : <li className="list-group-item text-center">Nėra užduočių</li>}
                </ul>
            )}
        </div>
    );
};

export default Tasks;


