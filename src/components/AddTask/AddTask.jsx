import { useState } from 'react';
import { Button, Form, InputGroup, FormControl } from 'react-bootstrap';
import { isEmpty } from 'lodash';
import { db } from '../../utils/firebase.js';
import { collection, addDoc } from "firebase/firestore";

import { ReactComponent as Send } from '../../assets/send.svg';
import './AddTask.scss';

function AddTask() {
    const [task, setTask] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if(!isEmpty(task)) {
            savetask();
        }
    }

    const savetask = async () => {
        const newTask = {
            name: task,
            completed: false
        }
        try {
            const docRef = await addDoc(collection(db, "tasks"), newTask);
            setTask('');
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        <Form className='addtask' onSubmit={onSubmit}>
            <InputGroup className="addtask__inputgrp mb-3">
                <FormControl
                    className='py-3'
                    placeholder="New task..."
                    onChange={(e) => { setTask(e.target.value) }}
                    value={task}
                />
                <Button variant="outline-secondary" type='submit'>
                    <Send />
                </Button>
            </InputGroup>
        </Form>
    );
}

export default AddTask;