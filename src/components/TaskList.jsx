import TaskItem from "./TaskItem.jsx";
const TaskList = ({tasks}) => {
    return (
        <ul className='task__list'>
            {tasks.sort((a, b) => b.id - a.id).map( (task) => {
                return <TaskItem
                    key={task.id}
                    task={task}
                />
            })
            }
        </ul>
    )
};

export default TaskList