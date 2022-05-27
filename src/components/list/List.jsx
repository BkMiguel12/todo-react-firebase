import { useState, useEffect } from 'react';
import { db } from '../../utils/firebase.js';
import { collection, getDocs, query, orderBy } from "firebase/firestore";

import { Row, Col, Spinner } from 'react-bootstrap';

import AddTask from '../AddTask/AddTask';
import Task from '../Task/Task';

import './List.scss';

function List() {

    const [tasks, setTasks] = useState(null);
    const [reloadTasks, setReloadTasks] = useState(false);

    useEffect(() => {
        getTasks();
    }, [reloadTasks]);

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
            setReloadTasks(false);
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
                className='todolist__list my-0 px-0'
            >
                {/* Task Component */}
                {
                    !tasks ? (
                        <div className="todolist__list_loading py-5">
                            <Spinner animation="grow" />
                            <span>Loading...</span>
                        </div>
                    ) : tasks.length === 0 ? (
                        <h3 className='text-center py-5'>No tasks added.</h3>
                    ) : (
                        tasks.map(task => {
                            return (
                                <Task 
                                    task={task} 
                                    key={task.id} 
                                    setReloadTasks={setReloadTasks} 
                                />
                            )
                        })
                    )
                }
            </Col>

            <Col 
                md={{ span: 8, offset: 2 }}
                className='todolist__input px-0 text-center'
            >
                <AddTask setReloadTasks={setReloadTasks}/>
            </Col>
        </Row>
    )
}

export default List;