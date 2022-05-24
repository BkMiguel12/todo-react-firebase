import { useState } from 'react';
import { Button, Form, InputGroup, FormControl } from 'react-bootstrap';
import { ReactComponent as Send } from '../../assets/send.svg';
import './AddTask.scss';

function AddTask() {
    const [task, setTask] = useState(null);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(task);
    }

    return (
        <Form className='addtask' onSubmit={onSubmit}>
            <InputGroup className="addtask__inputgrp mb-3">
                <FormControl
                    className='py-3'
                    placeholder="New task..."
                    onChange={(e) => { setTask(e.target.value) }}
                />
                <Button variant="outline-secondary" type='submit'>
                    <Send />
                </Button>
            </InputGroup>
        </Form>
    );
}

export default AddTask;