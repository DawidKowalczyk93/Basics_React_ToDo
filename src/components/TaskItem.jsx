import {CheckIcon, PencilIcon} from "@heroicons/react/24/solid";
import {useState} from "react";

const TaskItem = ({task}) => {

    const [isChecked, setIsChecked] = useState(task.checked);

    const handleCheckBoxChange = (e) => {
        setIsChecked(!isChecked);
        console.log('ischecked changed');
    };
    return (
        <li className='task__group'>
            <div className="task__item">
                <div>
                    <input
                        type='checkbox'
                        checked={isChecked}
                        onChange={handleCheckBoxChange}
                        name={task.name}
                        id={task.id}
                    />
                    <label
                        htmlFor={task.id}
                    >
                        {task.name}

                    </label>
                </div>

                <button
                    className='button'
                    aria-label={`Update ${task.name} Task`}
                    // onClick={}
                >
                    <PencilIcon width={12} height={12} />
                </button>
            </div>
        </li>
    )
};
export default TaskItem