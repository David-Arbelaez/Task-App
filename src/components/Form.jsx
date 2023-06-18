import React, { useState } from 'react';
import '../stylesheets/Form.css';
import { v4 as uuid } from 'uuid';

function Form(props) {

    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSend = e => {  
        e.preventDefault();

        const newTask = {
            id: uuid(),
            text: input,
            done: false
        }

        props.onSubmit(newTask);
    }

    return(
        <form onSubmit={handleSend} className='task-form'>
            <input
                className='task-input'
                type='text'
                placeholder='buy groceries...'
                name='text'
                onChange={handleChange}
            />
            <button className='task-button'>+ New Task</button>
        </form>
    )
}

export default Form;