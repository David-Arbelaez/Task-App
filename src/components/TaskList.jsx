import React, { useState } from 'react';
import Form from './Form.jsx';
import Task from './Task.jsx';
import '../stylesheets/TaskList.css';

function TaskList(){

    const[tasks, setTask] = useState([]);

    const addTask = task =>{
        if(task.text.trim()) {
            task.text = task.text.trim();
            const taskUpdated = [task, ...tasks]
            setTask(taskUpdated);
        }
    }

    const deleteTask = id => {
        const taskUpdated = tasks.filter(task => task.id !== id);
        setTask(taskUpdated);
    }

    const doneTask = id => {
        const taskUpdated = tasks.map(task => {
            if (task.id === id ) {
                task.done = !task.done;
            }
            return task;
        })
        setTask(taskUpdated);
    }

    return(
        <>
            <Form onSubmit={addTask}/>
            <div className='task-list-container'>
                {
                    tasks.map((tasks) =>
                        <Task
                            key={tasks.id}
                            id={tasks.id}
                            text={tasks.text}
                            done={tasks.done}
                            doneTask={doneTask}
                            deleteTask={deleteTask}
                        />
                    )
                }
            </div>
        </>
    )
}

export default TaskList; 