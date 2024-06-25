const TodoReducer = (state, action) => {
    switch (action.type) {
        case 'Add task':
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
        case 'Remove task':
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload)
            };
        case 'Complete task':
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload ? { ...task, completed: !task.completed } : task
                )
            };
        case 'Open form':
            return {
                ...state,
                isOpen: action.payload
            };
        case 'Toggle show completed':
            return {
                ...state,
                showCompleted: !state.showCompleted
            };
        default:
            return state;
    }
};
export default TodoReducer;
