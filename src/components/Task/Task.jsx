import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from '../../utils/firebase.js';

import { toast } from 'react-toastify';
import Swal from 'sweetalert2'

import { ReactComponent as Check } from '../../assets/check.svg';
import { ReactComponent as Delete } from '../../assets/delete.svg';

import './Task.scss';
import 'sweetalert2/src/sweetalert2.scss'

function Task(props) {
    const { task, setReloadTasks } = props;

    const updateTask = async () => {
        const taskDbRef = doc(db, "tasks", task.id);
        try {
            await updateDoc(taskDbRef, {
                completed: !task.completed
            });
            setReloadTasks(true);
            toast.info('Task updated sucesfully', { theme: 'dark' });
        } catch (error) {
            console.log(error);
        }
    }

    const deleteTask = async () => {
        const taskDbRef = doc(db, "tasks", task.id);
        try {
            await deleteDoc(taskDbRef);
            setReloadTasks(true);
            toast.info('Task deleted sucesfully', { theme: 'dark' });
        } catch (error) {
            console.log(error);
        }
    }

    const showSweet = () => {
        Swal.fire({
            title: 'Warning!',
            text: 'Are you sure you want to delete this task?',
            icon: 'warning',
            showConfirmButton: true,
            confirmButtonText: 'Yes',
            showCancelButton: true,
            cancelButtonText: 'No',
        }).then(result => {
            if(result.isConfirmed) {
                deleteTask();
            }
        })
    }
    
    return (
        <div className='task'>
            <div className='task__check'>
                <Check 
                    className={task.completed ? 'completed' : ''}
                    onClick={updateTask} 
                />
            </div>
            <div className='task__text'>
                {task.name}
            </div>
            <div className='task__delete'> 
                <Delete onClick={showSweet} />
            </div>
        </div>
    )
}

export default Task;