import { useState, useEffect } from 'react';
import { db } from '../../utils/firebase.js';
import { collection, getDocs, query, orderBy } from "firebase/firestore";

import { Row, Col } from 'react-bootstrap';
import AddTask from '../AddTask/AddTask';
import Task from '../Task/Task';
import './List.scss';

function List() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks();
    }, []);

    const getTasks = async () => {
        try {
            const tasksSnapshot = await getDocs(
                query(
                    collection(db, 'tasks'), 
                    orderBy('completed')
                )
            );
            let arrayTasks = [];
            tasksSnapshot.forEach(task => {
                const data = {
                    ...task.data(),
                    id: task.id
                }
                arrayTasks.push(data);
            });
            setTasks(arrayTasks)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Row className='todolist mx-0'>
            <Col 
                md={{ span: 8, offset: 2 }}
                className='todolist__title mt-4 py-4 text-center'
            >
                <h2 className='mb-0'>Today</h2>
            </Col>

            <Col 
                md={{ span: 8, offset: 2 }}
                className='todolist__list mt-2 text-center'
            >
                {/* Task Component */}
                {
                    tasks.map(task => {
                        return (
                            <Task task={task} key={task.id} />
                        )
                    })
                }
            </Col>

            <Col 
                md={{ span: 8, offset: 2 }}
                className='todolist__input mt-2 px-0 text-center'
            >
                <AddTask />
            </Col>
        </Row>
    )
}

export default List;