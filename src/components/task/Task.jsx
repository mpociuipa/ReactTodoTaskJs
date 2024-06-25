import React from 'react';
import { useGlobalContext } from '../../context/TasksContext';

const Task = (props) => {
    const { removeTask, markTaskCompleted } = useGlobalContext();

    return (
        <li className={`list-group-item d-flex justify-content-between align-items-center ${props.completed ? 'task-completed' : ''}`}>
            <div>
                <strong>{props.title}</strong>: {props.description}
            </div>
            <div>
                <button className="btn btn-success mx-2" onClick={() => markTaskCompleted(props.id)}>
                    {props.completed ? 'Atžymėti kaip neatliktą' : 'Žymėti kaip atliktą'}
                </button>
                <button className="btn btn-danger" onClick={() => removeTask(props.id)}>Salinti</button>
            </div>
        </li>
    );
}

export default Task;
