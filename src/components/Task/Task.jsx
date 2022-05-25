function Task(props) {
    const { task } = props;
    
    return (
        <div className="tasklist">
            <p>{task.name} - Completed?: {task.completed ? 'Yes' : 'No'}</p>
        </div>
    )
}

export default Task;