import {useState} from "react";
import {PlusIcon} from '@heroicons/react/24/solid';

const CustomForm = ({addTask}) => {

    const [task, setTask] = useState('');
    const handleFormSubmit = (e) => {
        e.preventDefault();
        addTask({
            name: task,
            checked: false,
            id: Date.now()
        });
        setTask("");
    };

    return (
        <form
            onSubmit={handleFormSubmit}
        >
            <input
                type='text'
                id='task'
                className='input'
                value={task}
                onInput={e => setTask(e.target.value)}
                required
                autoFocus
                maxLength={60}
                placeholder='Enter Task'
            />
            <label
                htmlFor='task'
                className='label'
            ></label>
            <button
                className='button'
                aria-label='Add Task'
                type='submit'
            >
                <PlusIcon />
            </button>



        </form>
    )
};

export default CustomForm