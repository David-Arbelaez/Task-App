import React from 'react';
import '../stylesheets/Task.css';
import { AiOutlineMinusCircle } from 'react-icons/ai';

function Task({ id, text, done, doneTask, deleteTask }){
    return(
        <div className={done ? 'task-container done' : 'task-container'}>
            <div className='task-text'
                onClick={() => doneTask(id)}
            >
                {text}
            </div>
            <div 
                className='close-icon'
                onClick={() => deleteTask(id)}
            >
                <AiOutlineMinusCircle className='close-icon'/>
            </div>
        </div>
    )
}

export default Task;